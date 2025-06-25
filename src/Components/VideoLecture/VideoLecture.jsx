import React, { useContext, useState } from 'react'
import { FaLock } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



const VideoLecture = ({videoItem}) => {

    const {isLogedIn} = useContext(courseContext)

  return (
    <Link to={`/video/${videoItem.video_title}/${videoItem.video_id}`}>
        <div id='video_lecture'>
            <div className='flex items-center justify-between mb-3 bg-[#dcddde] px-3 py-3 rounded-md cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span>{isLogedIn ? <FaUnlockAlt /> : <FaLock />}</span>
                    <span>{videoItem.video_title}</span>
                </div>
                <div>
                    <span><FaCirclePlay /></span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default VideoLecture
