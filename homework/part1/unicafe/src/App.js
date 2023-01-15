import { useState } from 'react'

const Title = props => <h1>{props.value}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <div>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </div>
)
const Statistics = (props) => {
  if(props.all === 0) {
    return (
      <div>No Feedback Given</div>
    )
  } else {
  return (
    <div>
      <table>
      <tr>
        <StatisticLine text="good" value={props.good} />
      </tr>
      <tr>
        <StatisticLine text="neutral" value={props.neutral} />
      </tr>
      <tr>
        <StatisticLine text="bad" value={props.bad} />
      </tr>
      <tr>
        <StatisticLine text="all" value={props.all} />
      </tr>
      <tr>
        <StatisticLine text="average" value={props.average} />
      </tr>
      <tr>
        <StatisticLine text="positive" value={props.positive} />
      </tr>
      </table>
    </div>
  )}
}



const App = () => {
  // save clicks of each button to its own state}
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    console.log('value now', newValue)
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }

  const setToBad = (newValue) => {
    console.log('value now', newValue)
    setBad(newValue)
  }

  const all = good + neutral + bad;
  const average = (good-bad)/all;
  const positive = (good/all)+"%";

  return (
    <div>
      <Title value = {"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Title value = {"statistics"} />
      <Statistics all={all} average={average} good={good} neutral={neutral} bad={bad} positive={positive}/>
      
    </div>
  ) 
}

export default App