import { useState, useEffect } from "react";
import axios from "axios";
import peopleService from "./services/person";
import Form from "./Components/Form";
import Search from "./Components/Search";
import Phonebook from "./Components/Phonebook";
import Notification from "./Components/Notification";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");
	const [message, setMessage] = useState(null);

	useEffect(() => {
		peopleService.getPerson().then((people) => setPeople(people));
	}, []);

	const addNewName = (event) => {
		event.preventDefault();
		const addPerson = {
			name: newName,
			number: newPhone,
		};

		const updatedPerson = { ...addPerson, number: newPhone };

		if (people.some((e) => e.name === newName)) {
			if (
				window.confirm(
					`${newName} is already added to the phonebook, replace the old number with a new one?`
				)
			) {
				peopleService
					.updatePerson(
						people.filter((p) => p.name === newName)[0].id,
						addPerson
					)
					.then((returnedPerson) => {
						setPeople(
							people.map((person) =>
								person.id !== addPerson.id
									? person
									: returnedPerson
							)
						);
						setNewName("");
						setNewPhone("");
						setMessage(
							`${updatedPerson.name} was successfully updated`
						);
						setTimeout(() => {
							setMessage(null);
						}, 5000);
					})
					.catch((error) => {
						console.log(error);
						setPeople(
							people.filter(
								(person) => person.id !== updatedPerson.id
							)
						);
						setNewName("");
						setNewPhone("");
						setMessage(
							`[ERROR] ${updatedPerson.name} was already deleted from server`
						);
						setTimeout(() => {
							setMessage(null);
						}, 5000);
					});
			}
		} else {
			peopleService
				.createPerson(addPerson)
				.then((returnedPerson) => {
					setPeople(people.concat(returnedPerson));
					setNewName("");
					setNewPhone("");
					setMessage(`${newName} was successfully added`);
					setTimeout(() => {
						setMessage(null);
					}, 5000);
				})
				.catch((error) => {
					setMessage(`[ERROR] ${error.response.data.error}`);
					setTimeout(() => {
						setMessage(null);
					}, 5000);
					console.log(error.response.data);
				});
		}
	};

	const deletePerson = (id) => {
		const filteredPerson = people.filter((person) => person.id === id);

		const personName = filteredPerson[0].name;
		const personId = filteredPerson[0].id;
		if (window.confirm(`Delete ${personName} ?`)) {
			peopleService.deletePerson(personId);
			console.log(`${personName} successfully deleted`)
			setMessage(
			  `${personName} was successfully deleted`
			)
			setPeople(people.filter(person => person.id !== personId))
			setTimeout(() => {
			  setMessage(null)
			}, 5000)
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={message} />
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
