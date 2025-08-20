import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const setValue = (newValue) => () => {
    
  }

  const hello = (who) => () => console.log('hello', who);
  
    
  return (
    <div>
      {value}
      <button onClick={hello('world')}>Button</button>
      <button onClick={hello('react')}>Button</button>
      <button onClick={hello('function')}>Button</button>
    </div>
  )
}

export default App
