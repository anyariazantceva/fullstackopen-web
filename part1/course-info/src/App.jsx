const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({partOne, partTwo, partThree}) => {
  console.log("Part one " + partOne.name)
  return (
    <div>
      <Part part={partOne.name} exercises={partOne.exercises}/>
      <Part part={partTwo.name} exercises={partTwo.exercises}/>
      <Part part={partThree.name} exercises={partThree.exercises}/>
    </div>
  )
}

const Total = ({exercisesOne, exercisesTwo, exercisesThree }) => {
  return (
    <p>Number of exercises {exercisesOne + exercisesTwo + exercisesThree}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
     <Content partOne={part1} partTwo={part2} partThree={part3}/>
      <Total exercisesOne={part1.exercises} exercisesTwo={part2.exercises} exercisesThree={part3.exercises}/>
      
    </div>
  )
}

export default App