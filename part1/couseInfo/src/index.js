import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
	return (
		<div>
			greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	);
};

const Content = (props) => {
	const listParts = props.parts.map((part, index) => (
		<Part key={index} part={part} />
	));
	return <div>{listParts}</div>;
};

const Total = (props) => {
	let total = 0;
	props.parts.forEach((part) => {
		total = total + part.exercises;
	});
	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
