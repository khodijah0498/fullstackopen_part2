import Part from "./Part";

const Content = ({part}) => {
    
    
    
    
  return (
    <div>
      
        {part.map((course) => <Part key={course.id} name = {course.name} exercise = {course.exercises}/>)}
     
    </div>
  );
};
export default Content;
