import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseItemList from '../CourseItemList/CourseItemList'
// all courses of instructure
const AllCoursesOfInstructor = () => {

    const loadedCoursesOfInstructor = useLoaderData()
    const [allCoursesOfInstructor, setAllCoursesOfInstructor] = useState(loadedCoursesOfInstructor)
    

    return (
        <div id='all_courses_of_isntructor' className='w-11/12 mx-auto'>
            <a href=""></a>
            <div className="container">
                {allCoursesOfInstructor.length > 0 && allCoursesOfInstructor.map((course) => {
                    return <CourseItemList key={course._id} course={course} allCoursesOfInstructor = {allCoursesOfInstructor} setAllCoursesOfInstructor = {setAllCoursesOfInstructor} />
                })}
            </div>
        </div>
    )
}

export default AllCoursesOfInstructor
