import React from 'react';
import Button from './components/Button';
import { useState } from 'react';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const sum = good + neutral + bad;
  const avg =
    Math.floor(((good * 1 + neutral * 0 + bad * -1) / sum) * 100) || 0;
  const positive = Math.floor((good / sum) * 100) || 0;

  const stats = { good, neutral, bad, sum, avg, positive };

  // console.log(Object.values(stats).some((stat) => stat > 0));

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <Statistics stats={stats} />
    </>
  );
};

export default App;
