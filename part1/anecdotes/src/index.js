import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = (props) => {
	const len = props.anecdotes.length;
	const [selected, setSelected] = useState(0);
	const [ranking, setRanking] = useState(new Array(len).fill(0));
	const [topRanked, setTopRanked] = useState(0);

	const updateRanking = () => {
		const rankingCopy = [...ranking];
		rankingCopy[selected] += 1;
		let maxVotes = Math.max(...rankingCopy);
		setTopRanked(rankingCopy.indexOf(maxVotes));
		setRanking(rankingCopy);
	};

	return (
		<>
			<h1>Anecdote of the day</h1>
			<div>{props.anecdotes[selected]}</div>
			<p>has {ranking[selected]} votes</p>
			<button onClick={updateRanking}>vote</button>
			<button onClick={() => setSelected(Math.floor(Math.random() * len))}>
				next anecdote
			</button>
			<h1>Anecdote with most votes</h1>
			<div>{props.anecdotes[topRanked]}</div>
			<p>has {ranking[topRanked]} votes</p>
		</>
	);
};

const anecdotes = [
	"If it hurts, do it more often",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App anecdotes={anecdotes} />);
