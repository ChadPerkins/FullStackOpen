import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from "./Total"


const Course = ({courses}) => {
  return (
    <div>
        <Header name={courses.name} />
        <Content course={courses} />
        <Total courses={courses}/>
    </div>
  )
}

export default Course;
