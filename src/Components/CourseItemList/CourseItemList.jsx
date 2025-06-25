import React from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CourseItemList = ({ course, allCoursesOfInstructor, setAllCoursesOfInstructor }) => {

    const { _id, title, thumbnailUrl, description, regularPrice, discountedPrice, category } = course

    const handleDeleteCourse = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/courses/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })

                            const remainingCourses = allCoursesOfInstructor.filter((courseItem) => courseItem._id !== _id)
                            setAllCoursesOfInstructor(remainingCourses)
                        } else {
                            Swal.fire({
                                title: "Already Deleted!",
                                text: "This course is already deleted.",
                                icon: "error"
                            })
                        }
                    })
                    .catch(error => console.log('Error while fetching data', error.message))
            }
        })
    }

    return (
        <div id='course_item_list' className='bg-success py-3 px-4 rounded-lg mb-3 text-white flex items-center justify-between'>
            <div className="flex items-center gap-5">
                <div className="course_thumbnail">
                    <img className='w-[120px] rounded-lg' src={thumbnailUrl} alt="course thumbnail" />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>{title}</h3>
                    <p>Category: {category}</p>
                    <div className="flex items-center gap-4">
                        <p className="regular_price">Discounted Price: ${discountedPrice}</p>
                        <p className="regular_price">Regular Price: <del>${regularPrice}</del></p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div>
                    <Link to={`/update-course/${_id}`} className='btn bg-yellow-400'>Update</Link>
                </div>
                <div onClick={() => handleDeleteCourse(_id)} className="delete_course text-2xl text-red-600 cursor-pointer">
                    <MdDelete />
                </div>
            </div>
        </div>
    )
}

export default CourseItemList
