import { useState } from "react";

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
		console.log(persons);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<p>
				filter shown with{" "}
				<input
					placeholder="Search"
					value={newSearch}
					onChange={(e) => setNewSearch(e.target.value)}
				/>
			</p>
			<h2>add a new</h2>
			<form onSubmit={addNewName}>
				<div>
					name:
					<input
						placeholder="Enter a name"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
					/>
				</div>

				<div>
					number:{" "}
					<input
						placeholder="Enter a phone number"
						value={newPhone}
						onChange={(e) => setNewPhone(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons
				.filter((p) => {
					if (newSearch === "") {
						return p;
					} else if (
						p.name
							.toLocaleLowerCase()
							.includes(newSearch.toLocaleLowerCase())
					) {
						return p;
					}
				})
				.map((p) => {
					return (
						<p key={p.id}>
							{p.name}: {p.phone}
						</p>
					);
				})}
		</div>
	);
};

export default App;
