import React, { useContext } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'

const VideoPage = () => {
  const loadedCourse = useLoaderData()
  console.log(loadedCourse)

  return (
    <div id='video_page' className='py-5'>
      <div className="container">
        <div className="video_frame aspect-w-16 aspect-h-9">
          <iframe className='w-full h-[598px]' src={loadedCourse.module[0].moduleVideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <h2 className='font-bold text-3xl mt-5'>{loadedCourse.title}</h2>
        <p>{loadedCourse.description}</p>
        <div className="flex justify-end">
          <Link to='/certificate' className='btn bg-yellow-500 mt-5 btn-lg'>Next</Link>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
