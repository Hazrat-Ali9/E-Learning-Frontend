import React from 'react'
import Course from '../../Components/Course/Course';

const DisplayCourses = ({mapFrom}) => {

  return (
    <div id='display_courses' className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
      {mapFrom.length > 0 && mapFrom.map((course, index) => {
            return <Course key={course._id} course={course} />
      })}
    </div>
  )
}

export default DisplayCourses
