import React, { useContext } from 'react'
import CourseModule from '../CourseModule/CourseModule'
import { Link } from 'react-router-dom'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'
import { authContext } from '../../Contexts/AuthContex/AuthContext'

const CourseModules = ({ course }) => {

  const {user} = useContext(authContext)

  return (
    <div id='course_modules' className='pt-10 pb-20'>
      {course.module.length > 0 && course.module.map((item, index) => {
        return <div className="collapse collapse-arrow bg-yellow-500">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-yellow-600">{course.module[index].moduleTitle}</div>
          <div className="collapse-content">
            <p className='pt-3'><Link to={user ? `/video-lecture/${course._id}` : '/login'}>Lecture 1</Link></p>
          </div>
        </div>
      })}
    </div>
  )
}

export default CourseModules
