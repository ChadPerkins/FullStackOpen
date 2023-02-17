import React from 'react'

const Total = ({courses}) => {
    let totalExersizes = 0;
    const total = courses.parts.map(course => {
        totalExersizes += course.exercises;
        return totalExersizes;        
    })

  return (
    <p><b>total of {totalExersizes} exercises</b></p>
  )
}

export default Total;