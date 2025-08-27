import { useState } from 'react'



const Display = () => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }
      
  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousend" />
      <Button onClick={() => setToValue(0)} text="rest" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App
