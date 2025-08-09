import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';


const Display = ({ counter }) => <div>{counter}</div>

const ButtonExample = ({text, type, onClick }) => <Button label={text} icon="pi pi-check" severity={type} onClick={onClick}/>


const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLefClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  

  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1})
  


  return (
    <PrimeReactProvider  value={{
        ripple: true,
        inputStyle: 'outlined',
        locale: 'pt-BR'
    }}>
      <div>
        { clicks.left }
        <ButtonExample text="left" type="success" onClick={handleLefClick} />
        <ButtonExample text="right" type="danger" onClick={handleRightClick} />
      </div>
        { clicks.right }
    </PrimeReactProvider>
  )
}

export default App
