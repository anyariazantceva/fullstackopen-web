import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)
  let total = good + bad + neutral;

  const addStatistics = (statsType) => {
    switch (statsType) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;  
      default:
        break;
    }
  }

  const calculateAverage = () => {
    return good * 1 + neutral * 0 + bad * (-1)/ total;
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={() => addStatistics("good")}>good</button>
      <button onClick={() => addStatistics("neutral")}>neutral</button>
      <button onClick={() => addStatistics("bad")}>bad</button>

      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {good + bad + neutral}</p>
        <p>Average: {calculateAverage() || 0}</p>
        <p>Positive: {`${parseFloat(good / total) * 100 } %`}</p>
      </div>
    </div>
  )
}

export default App