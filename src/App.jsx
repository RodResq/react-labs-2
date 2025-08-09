import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';


const Display = ({ counter }) => <div>{counter}</div>

const ButtonExample = ({text, type, onClick }) => <Button label={text} icon="pi pi-check" severity={type} onClick={onClick}/>


const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendereing with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter);
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0)
  }

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
