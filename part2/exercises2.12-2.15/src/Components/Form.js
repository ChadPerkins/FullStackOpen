import React from "react";

const Form = ({addNewName, newName, newPhone, setNewName, setNewPhone}) => {
	return (
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
	);
};

export default Form;
