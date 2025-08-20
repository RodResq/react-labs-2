import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';

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
