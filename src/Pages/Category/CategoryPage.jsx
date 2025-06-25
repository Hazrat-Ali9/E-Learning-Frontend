import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Course from '../../Components/Course/Course'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'

const CategoryPage = () => {

  const {categoryName} = useParams()
  const {allCourses} = useContext(courseContext)

  console.log(allCourses, categoryName)


  return (
    <div id='category_page' className='py-5'>
      <div className="container">
        <div className="page_title mb-10">
          <h2 className='font-bold text-2xl text-center'>{categoryName} Courses</h2>
        </div>
      </div>
      <div className="container grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allCourses.length > 0 && allCourses.map((course) => {
            const joinCategory =course.category.split(' ').join('-').toLowerCase()
            if(joinCategory === categoryName.toLocaleLowerCase()){
              return <Course course = {course}/>
            }
        })}
      </div>
    </div>
  )
}

export default CategoryPage
