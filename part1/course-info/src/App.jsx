const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) => {
  <p>
    {part} {exercises}
  </p>
}

const Content = ({partOne, partTwo, partThree, exercisesOne, exercisesTwo, exercisesThree}) => {
  return (
    <>
      <Part part={partOne} exercises={exercisesOne}/>
      <Part part={partTwo} exercises={exercisesTwo}/>
      <Part part={partThree} exercises={exercisesThree}/>
    </>
  )
}

const Total = ({exercisesOne, exercisesTwo, exercisesThree }) => {
  return (
    <p>Number of exercises {exercisesOne + exercisesTwo + exercisesThree}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content partOne={part1} partTwo={part2} partThree={part3} exercisesOne={exercises1} exercisesTwo={exercises2} exercisesThree={exercises3}/>
      <Total exercisesOne={exercises1} exercisesTwo={exercises2} exercisesThree={exercises3}/>
      
    </div>
  )
}

export default App