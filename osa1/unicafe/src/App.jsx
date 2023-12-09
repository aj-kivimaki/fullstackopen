import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={() => handleClick(text)}>{text}</button>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;

  const handleClick = (text) => {
    if (text === "good") return setGood(good + 1);
    if (text === "neutral") return setNeutral(neutral + 1);
    return setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleClick} text="good" />
      <Button handleClick={handleClick} text="neutral" />
      <Button handleClick={handleClick} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average || 0}</p>
      <p>positive {positive || 0}</p>
    </div>
  );
};

export default App;
