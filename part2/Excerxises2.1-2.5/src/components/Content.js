import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
	
	const part = course.parts.map((course) => {
		return <Part name={course.name} exercises={course.exercises} />;
	});

	return <div>{part}</div>;
};

export default Content;
