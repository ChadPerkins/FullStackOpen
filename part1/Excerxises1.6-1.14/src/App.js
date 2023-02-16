import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);


	
	return (
		<div>
			<Title text={"give feedback"} />
			<Button handleClick={() => setGood (good + 1)} review={"good"} />
			<Button handleClick={() => setNeutral(neutral + 1)} review={"neutral"} />
			<Button handleClick={() => setBad(bad + 1)} review={"bad"} />
			<Title text={"statistics"} />
			<Review review={good} text={"good"} />
			<Review review={neutral} text={"neutral"} />
			<Review review={bad} text={"bad"} />
		</div>
	);
};

export default App;

const Button = ({ handleClick, review }) => {
	return <button onClick={handleClick}>{review}</button>;
};

const Title = ({text}) => {
	return <h1>{text}</h1>
}
const Review = ({review, text}) => {
	return <p>{text} {review}</p>
}