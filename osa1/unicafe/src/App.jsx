import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={() => handleClick(text)}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;

  if (all === 0) return <p>No feedback given</p>;

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average || 0}</p>
      <p>positive {positive || 0} %</p>
    </>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (text) => {
    if (text === "good") return setGood((prev) => prev + 1);
    if (text === "neutral") return setNeutral((prev) => prev + 1);
    return setBad((prev) => prev + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleClick} text="good" />
      <Button handleClick={handleClick} text="neutral" />
      <Button handleClick={handleClick} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
