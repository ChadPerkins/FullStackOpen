import React from "react";

const Total = ({ courses }) => {
	const totalExersizes = 0;
	const addTotal = courses.parts.reduce((total, currentValue) => {
		return (total += currentValue.exercises);
	}, totalExersizes);
	// const total = courses.parts.map(course => {
	//     totalExersizes += course.exercises;
	//     return totalExersizes;
	// })

	return (
		<p>
			<b>total of {addTotal} exercises</b>
		</p>
	);
};

export default Total;
