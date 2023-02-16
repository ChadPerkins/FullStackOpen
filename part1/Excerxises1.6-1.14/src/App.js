import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const reviews = {
		good: good,
		neutral: neutral,
		bad: bad,
	};

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

const Statistics = ({ good, bad, neutral }) => {
	const total = good + neutral + bad;
	const average = (good * 1 + bad * -1) / total;
	const positive = good * (100 / total);

	return (
		<div>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {total}</p>
			<p>average {average}</p>
			<p>positive {positive}</p>
		</div>
	);
};
