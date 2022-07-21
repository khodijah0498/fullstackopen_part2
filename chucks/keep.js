/**
 * <Part
        name={props.courses[0].parts[0].name}
        exercises={props.courses[0].parts[0].exercises}
      />
      <Part
        name={props.courses[0].parts[1].name}
        exercises={props.courses[0].parts[1].exercises}
      />
      <Part
        name={props.courses[0].parts[2].name}
        exercises={props.courses[0].parts[2].exercises}
      />
      <Part
        name={props.courses[0].parts[3].name}
        exercises={props.courses[0].parts[3].exercises}
      />
      <Part
        name={props.courses[1].parts[0].name}
        exercises={props.courses[1].parts[0].exercises}
      />
      <Part
        name={props.courses[1].parts[1].name}
        exercises={props.courses[1].parts[1].exercises}
      />

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
        <Header course = {courses}/>
        {courses.map((course) => <Content parts = {course.parts} />)}
        <Total />
        <Totall /><Content course = {courses} />
      
        
      </div>
    );
  };
 */