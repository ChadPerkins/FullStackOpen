import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const addNewName = (event) => {
		event.preventDefault();
		
    if(persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat({ name: newName}))
    }
    console.log(persons);
		
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
