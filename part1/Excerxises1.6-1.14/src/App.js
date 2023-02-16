import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Title text={"give feedback"} />
			<Button handleClick={() => setGood(good + 1)} review={"good"} />
			<Button
				handleClick={() => setNeutral(neutral + 1)}
				review={"neutral"}
			/>
			<Button handleClick={() => setBad(bad + 1)} review={"bad"} />
			<Title text={"statistics"} />
			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
	);
};

export default App;

const Button = ({ handleClick, review }) => {
	return <button onClick={handleClick}>{review}</button>;
};

const Title = ({ text }) => {
	return <h1>{text}</h1>;
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, bad, neutral }) => {
	const total = good + neutral + bad;
	const average = (good * 1 + bad * -1) / total;
	const positive = good * (100 / total);

	if (good === 0 && neutral === 0 && bad === 0) {
		return <p>No feedback given</p>;
	}

	return (
		<table>
			<tbody>
				<StatisticLine text={"good"} value={good} />
				<StatisticLine text={"neutral"} value={neutral} />
				<StatisticLine text={"bad"} value={bad} />
				<StatisticLine text={"all"} value={total} />
				<StatisticLine text={"average"} value={average} />
				<StatisticLine text={"positive"} value={positive} />
			</tbody>
		</table>
	);
};
