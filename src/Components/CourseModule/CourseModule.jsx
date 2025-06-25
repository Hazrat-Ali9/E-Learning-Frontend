import React from 'react'
import VideoLecture from '../VideoLecture/VideoLecture'

const CourseModule = ({moduleItem}) => {

    const {module_title, videos} = moduleItem

  return (
    <div id='course_module'>
      <div className="collapse collapse-arrow bg-base-200 mb-3 shadow-md">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">{module_title}</div>
            <div className="collapse-content">
                {videos && videos.map((videoItem, index) => {
                    return <VideoLecture key={index} videoItem={videoItem}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default CourseModule
