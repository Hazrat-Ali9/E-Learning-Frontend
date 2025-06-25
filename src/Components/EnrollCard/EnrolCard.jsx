import React, { useContext, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { shopContext } from '../../Contexts/ShopContext/ShopContext';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import Swal from 'sweetalert2';



const EnrolCard = ({ course }) => {

    const { _id, thumbnailUrl, isOnCart, discountedPrice, regularPrice, module: { moduleTitle, moduleVideoLink } } = course

    const [playVideo, setPlayVideo] = useState(false)

    const handleEnrollButton = () => {
        fetch(`http://localhost:5000/courses/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isOnCart: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Course successfully enrolled!",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: data.message || "Could not enroll!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating isOnCart:", error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
    }

    const handleIntroVideo = () => {
        setPlayVideo(true)
    }

    return (
        <div id='enroll_card' className='border-4 border-white bg-white text-black rounded-md shadow-xl'>
            <div className="promoVideo relative">

                {playVideo ?
                    <iframe className='w-full h-[250px]' src={moduleVideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    :

                    <div>
                        <div className="thumbnail_image">
                            <img className='w-full' src={thumbnailUrl} alt="thumbnail image" />
                        </div>
                        <div onClick={handleIntroVideo} className='play_icon absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full text-red-600 cursor-pointer'>
                            <FaPlay />
                        </div>
                    </div>

                }

            </div>


            <div className="body px-3 pb-3">
                <div className="price flex item-center gap-2 mt-5 mb-1">
                    <span className="discounted_price font-bold text-xl">
                        ${discountedPrice}
                    </span>
                    <span className="discounted_price text-lg">
                        <del>${regularPrice}</del>
                    </span>
                </div>
                <h3 className='font-bold text-lg mb-4'>{ }</h3>
                <button onClick={handleEnrollButton} className='btn btn-success text-white w-full font-bold text-lg'>{isOnCart ? 'Enrolled' : 'Enroll Course'}</button>
            </div>
        </div>
    )
}

export default EnrolCard
