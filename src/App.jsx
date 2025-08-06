import { useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import './App.css'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <Stack direction="horizontal" gap={2}>
      <div>{counter}</div>
      <Button as="a" variant="primary" onClick={() => setCounter(counter + 1)}>
        Add
      </Button>
      <Button as="a" variant="success" onClick={() => setCounter(0)}>
        Reset
      </Button>
    </Stack>
  )
}

export default App
