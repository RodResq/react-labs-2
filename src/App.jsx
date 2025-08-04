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
      <h1>{props.course.name}</h1>
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

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.course.parts[0].name} numExcercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} numExcercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} numExcercises={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
