import { useState, useEffect } from "react";
import axios from "axios";
import peopleService from "./services/person";
import Form from "./Components/Form";
import Search from "./Components/Search";
import Phonebook from "./Components/Phonebook";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");

	useEffect(() => {
		peopleService.getPerson().then((people) => setPeople(people));
	}, []);

	const addNewName = (event) => {
		event.preventDefault();
		const addPerson = {
			name: newName,
			number: newPhone,
		};

		if (people.some((e) => e.name === newName)) {
			if (
				window.confirm(
					`${newName} is already added to the phonebook, replace the old number with a new one?`
				)
			) {
				peopleService.updatePerson(
					people.filter((p) => p.name === newName)[0].id,
					addPerson
				).then(peopleService.getPerson().then((people) => setPeople(people)))
				
			}
		} else {
			setPeople(people.concat(addPerson));
			peopleService.createPerson(addPerson);
		}
	};

	const deletePerson = (id) => {
		const filteredPerson = people.filter((person) => person.id === id);

		const personName = filteredPerson[0].name;
		const personId = filteredPerson[0].id;
		if (window.confirm(`Delete ${personName} ?`)) {
			peopleService.deletePerson(personId);
			setPeople(people.filter((person) => person.id !== personId));
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<p>
				filter shown with{" "}
				<Search
					newSearch={newSearch}
					updateSearch={(e) => setNewSearch(e.target.value)}
				/>
			</p>
			<h2>add a new</h2>
			<Form
				addNewName={addNewName}
				newName={newName}
				newPhone={newPhone}
				setNewName={setNewName}
				setNewPhone={setNewPhone}
			/>
			<h2>Numbers</h2>
			<Phonebook
				people={people}
				newSearch={newSearch}
				deletePerson={deletePerson}
			/>
		</div>
	);
};

export default App;
