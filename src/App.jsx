import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <PrimeReactProvider  value={{
        ripple: true,
        inputStyle: 'outlined',
        locale: 'pt-BR'
    }}>
      <div>
        <div>{counter}</div>
        <Button label="Check" icon="pi pi-check" severity="success" onClick={() => setCounter(counter + 1)}/>
      </div>
    </PrimeReactProvider>
  )
}

export default App
