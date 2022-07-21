import Header from "./Header";
import Content from "./Content";
import { Total } from "./Total";



import React from 'react'

export const Course = ({course}) => {
    console.log(course);
  return (
    <div>
      <Header name={course.name} />
      <Content part={course.parts} />
      
        <Total course={course} />
      
    </div>
  );
}

export default Course



