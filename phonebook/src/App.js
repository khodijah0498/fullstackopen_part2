
import './App.css';




const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  const Header = () => {
    return(
  <h1>{course.name}</h1>
  )
  }
  const Part = (props) => {
    return(
      <p>{props.name} {props.exercises}</p>
    )
  }
  const Content = () => {
    return (
      <><Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
       <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
      
      </>
      
    );
  }
  
  const mapItems = course.parts.map(part => part.id)
  console.log(mapItems)

  const Course = () => {
    return(<div>
      <Header/>
      <Content/>
  {/* // <h1>{course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}</h1> */}
    </div>
    )
  }
// return <div>"Hello world"</div>
  return <Course course={course} />;
};

export default App;
