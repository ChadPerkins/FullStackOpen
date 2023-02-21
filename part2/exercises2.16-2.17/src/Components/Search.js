import React from "react";

const Search = ({newSearch, updateSearch}) => {
	return (
		<input
			placeholder="Search"
			value={newSearch}
			onChange={updateSearch}
		/>
	);
};

export default Search;
