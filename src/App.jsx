import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const ButtonExample = (props) => {
  return (
    <Button label={props.text} icon="pi pi-check" severity={props.type} onClick={props.onClick}/>
  )
}


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <PrimeReactProvider  value={{
        ripple: true,
        inputStyle: 'outlined',
        locale: 'pt-BR'
    }}>
      <div>
        <Display  counter={counter} />
        <ButtonExample text="plus" type="success" onClick={increaseByOne} />
        <ButtonExample text="zero" type="warning" onClick={setToZero} />
        <ButtonExample text="minus" type="danger" onClick={decreaseByOne} />
      </div>
    </PrimeReactProvider>
  )
}

export default App
