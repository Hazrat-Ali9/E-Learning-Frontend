import React from 'react'
import EnrolCard from '../../Components/EnrollCard/EnrolCard';
import CourseModules from '../../Components/CourseModules/CourseModules';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => { 
  
  const loadedCourse = useLoaderData()
  console.log(loadedCourse)

  const {title, description} = loadedCourse

  return (
    <div id='single_product_page'>
      <div className="page_header text-white py-10 bg-gradient-to-r from-[#03010F] to-[#0D234F]">
        <div className="container">
            <div className="page_header max-h-[300px] flex gap-10">
                <div className='w-[70%]'>
                    <h1 className='font-bold text-4xl mb-4'>{title && title}</h1>
                    <p>{description && description}</p>
                </div>
                <div className='w-[40%]'>
                    <EnrolCard course = {loadedCourse} />
                </div>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="page_body mt-5">
            <div className="left w-[60%]">
                <CourseModules course = {loadedCourse} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
