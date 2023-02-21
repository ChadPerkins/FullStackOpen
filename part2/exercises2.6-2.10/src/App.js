import { useState } from "react";
import Form from "./Components/Form";
import Search from "./Components/Search";
import Phonebook from "./Components/Phonebook";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "040-123456", id: 1 },
		{ name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", phone: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");

	const addNewName = (event) => {
		event.preventDefault();
		if (persons.some((e) => e.name === newName)) {
			alert(`${newName} is already added to the phonebook`);
		} else {
			setPersons(
				persons.concat({
					name: newName,
					phone: newPhone,
					id: persons[persons.length - 1].id + 1,
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
			<Phonebook people={persons} newSearch={newSearch} />
		</div>
	);
};

export default App;
