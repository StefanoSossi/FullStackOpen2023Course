import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = (props) => (
	<button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = ({ good, bad, neutral }) => {
	let all = good + bad + neutral;
	let average = all !== 0 ? (good - bad) / all : 0;
	let positive = all !== 0 ? (good * 100) / all : 0;

	if (all !== 0) {
		return (
			<>
				<h1>statistic</h1>
				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine text="all" value={all} />
						<StatisticLine text="average" value={average} />
						<StatisticLine text="positive" value={positive} />
					</tbody>
				</table>
			</>
		);
	}
	return <p>No feedback given </p>;
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>
				<p>{text}</p>
			</td>
			<td>
				<p>{value}</p>
			</td>
		</tr>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
