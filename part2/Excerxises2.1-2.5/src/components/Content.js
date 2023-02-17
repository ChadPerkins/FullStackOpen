import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
	const part = parts.map((course) => {
		return <Part key={course.id} name={course.name} exercises={course.exercises} />;
	});

	return <div>{part}</div>;
};

export default Content;
