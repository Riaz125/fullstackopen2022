import { useState } from 'react'

const Title = props => <h1>{props.value}</h1>
const Display = props => (
  <div>{props.rating} {props.value}</div>
)
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <div>
    <div>all {props.all}</div>
    <div>average {props.average}</div>
  </div>
)



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
  
  return (
    <div>
      <Title value = {"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Title value = {"statistics"} />
      <Display rating ={"good"} value={good} />
      <Display rating ={"neutral"} value={neutral} />
      <Display rating ={"bad"} value={bad} />
      <Statistics all={all} average={average}/>
      
    </div>
  ) 
}

export default App