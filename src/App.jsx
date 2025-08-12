import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';


const Display = ({ counter }) => <div>{counter}</div>

const ButtonExample = ({text, type, onClick }) => <Button label={text} icon="pi pi-check" severity={type} onClick={onClick}/>


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLefClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
    
  return (
    <PrimeReactProvider  value={{
        ripple: true,
        inputStyle: 'outlined',
        locale: 'pt-BR'
    }}>
      <div>
        { left }
        <ButtonExample text="left" type="success" onClick={handleLefClick} />
        <ButtonExample text="right" type="danger" onClick={handleRightClick} />
        { right }
      </div>
      <p>{allClicks.join(' ')}</p>
    </PrimeReactProvider>
  )
}

export default App
