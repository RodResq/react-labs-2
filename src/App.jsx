import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('Clicked to Button')
    setValue(0)
  }
    
  return (
    <div>
      {value}
      <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default App
