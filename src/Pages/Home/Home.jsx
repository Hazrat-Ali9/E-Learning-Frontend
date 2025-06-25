import React, { useContext } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses';
import { useLoaderData } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';

const Home = () => {

  const { allCourses } = useContext(courseContext)
  const courses = useLoaderData()

  return (
    <div id='home_page' className=''>
      <Slider />
      <div className="container">
        <div className="display_all_courses my-16">
          <h2 className='font-bold text-4xl text-center mb-5'>Our Courses</h2>
          <DisplayCourses mapFrom={courses} />
        </div>
      </div>
    </div>
  )
}

export default Home
