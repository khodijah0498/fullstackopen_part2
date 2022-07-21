
import './App.css';

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  const Header = () => {
    return <h1>{courses[0].name}</h1>;
  };
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };
  const Content = () => {
    return (
      <>
        <Part
          name={courses[0].parts[0].name}
          exercises={courses[0].parts[0].exercises}
        />
        <Part
          name={courses[0].parts[1].name}
          exercises={courses[0].parts[1].exercises}
        />
        <Part
          name={courses[0].parts[2].name}
          exercises={courses[0].parts[2].exercises}
        />
        <Part
          name={courses[0].parts[3].name}
          exercises={courses[0].parts[3].exercises}
        />
      </>
    );
  };
  const Total = () => {
    return (
      <div>
        total of{" "}
        {courses[0].parts[0].exercises +
          courses[0].parts[1].exercises +
          courses[0].parts[2].exercises +
          courses[0].parts[3].exercises}{" "}
        exercises
      </div>
    );
  };
  const Headerr = () => {
    return(
      <div>
        <h1>{courses[1].name}</h1>
      </div>
    )
  }
  const Contentt = () => {
    return (
      <>
        <Part
          name={courses[1].parts[0].name}
          exercises={courses[1].parts[0].exercises}
        />
        <Part
          name={courses[1].parts[1].name}
          exercises={courses[1].parts[1].exercises}
        />
      </>
    );
  }
  const Totall = () => {
    return (
      <div>
        total of{" "}
        {courses[1].parts[0].exercises +
          courses[1].parts[1].exercises} {" "}
        exercises
      </div>
    );
  };



  const mapItems = courses[0].parts.map((part) => part.id);
  console.log(mapItems);
  const total = courses[0].parts.reduce((s, p) => s + p.exercises, 0);
  console.log(total);
  const Course = () => {
    return (
      <div>
        <Header />
        <Content />
        <Total />
        <Headerr />
        <Contentt />
        <Totall />
      
        {/* // <h1>{course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}</h1> */}
      </div>
    );
  };
  
  return <Course course={courses} />;
};

export default App;