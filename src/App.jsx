import './App.css'

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </div>
//   )
// }


// const Hello = (props) => {
//   console.log(props);
//   return (
//     <>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greentings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

// const App = () => {
//   const friends = ['Peter', ' Maya']

//   return (
//     <div>
//       <p>{friends}</p>
//     </div>
//   )
// }

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.numExcercises}
      </p>
    </>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
      <Part name={part1} numExcercises={exercises1} />
      <Part name={part2} numExcercises={exercises2} />
      <Part name={part3} numExcercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} /> 
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>Number of exevises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'


  return (
    <div>
      <Header course={course} />
      <Content />
      {/* <Total total={exercises1 + exercises2 + exercises3}/> */}
    </div>
  )
}

export default App
