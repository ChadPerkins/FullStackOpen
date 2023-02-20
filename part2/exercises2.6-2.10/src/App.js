import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const addNewName = (event) => {
		event.preventDefault();
		const newList = persons.concat({ name: newName });
		setPersons(newList);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addNewName}>
				<div>
					name:{" "}
					<input
						placeholder="Enter a name"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => {
				return <p key={person.name}>{person.name}</p>;
			})}
		</div>
	);
};

export default App;
