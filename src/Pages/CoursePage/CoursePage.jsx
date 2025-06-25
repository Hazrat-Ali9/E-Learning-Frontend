import React, { useState } from 'react'
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import { useLoaderData } from 'react-router-dom'

const CoursePage = () => {

    const allCourses = useLoaderData()
    const [filterCourse, setFiltercourse] = useState(allCourses)

  return (
    <div id='course_page' className='py-5'>
      <div className="container">
        <div className="page_contianer flex gap-5">
            <div className="sidebar w-[30%]">
                <Sidebar filterCourse={filterCourse} setFiltercourse={setFiltercourse}/>
            </div>
            <div className="display_all_courses w-[70%]">
                <DisplayCourses mapFrom={allCourses}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
