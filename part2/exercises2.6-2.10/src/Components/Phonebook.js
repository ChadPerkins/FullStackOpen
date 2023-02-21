import React from "react";

const Phonebook = ({ newSearch, people }) => {
	return (
		<div>
			{people
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
					return null;
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

export default Phonebook;
