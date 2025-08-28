import { useState } from 'react'

<<<<<<< HEAD


const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
=======


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
>>>>>>> ad67d482a74d5b0f8b58e9559ce52a80fec7dbaf
    </div>
  )
}

export default App
