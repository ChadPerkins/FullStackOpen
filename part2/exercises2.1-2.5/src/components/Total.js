import React from "react";

const Total = ({ parts }) => {
	const totalExersizes = 0;
	const addTotal = parts.reduce((total, currentValue) => {
		return (total += currentValue.exercises);
	}, totalExersizes);
	
	return (
		<p>
			<b>total of {addTotal} exercises</b>
		</p>
	);
};

export default Total;
