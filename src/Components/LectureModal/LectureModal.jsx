import React from 'react'

const LectureModal = ({video, videoId}) => {



  return (
    <div id='lecture_modal'>
        <dialog id="my_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            
            <div className="video_container">
                <iframe className='w-full h-[548px]' src={video.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default LectureModal
