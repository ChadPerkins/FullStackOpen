import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Components/Form";
import Search from "./Components/Search";
import Phonebook from "./Components/Phonebook";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPeople(response.data);
		});
	}, []);

	const addNewName = (event) => {
		event.preventDefault();
		if (people.some((e) => e.name === newName)) {
			alert(`${newName} is already added to the phonebook`);
		} else {
			setPeople(
				people.concat({
					name: newName,
					phone: newPhone,
				})
			);
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
			<Phonebook people={people} newSearch={newSearch} />
		</div>
	);
};

export default App;
