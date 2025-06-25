import React from 'react'
import { Link } from 'react-router-dom'

const MyOrderItem = ({course}) => {
  return (
    <div id='course_item_list' className='bg-success py-3 px-4 rounded-lg mb-3 text-white flex items-center justify-between'>
            <div className="flex items-center gap-5">
                <div className="course_thumbnail">
                    <img className='w-[120px] rounded-lg' src={course.userPhotoUrl} alt="course thumbnail" />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>{course.userName}</h3>
                    <p>User Email: {course.userEmail}</p>
                    <p>Bkash Number: {course.bkashNumber}</p>
                    <p>Transection ID: {course.transectionId}</p>
                    <p>Total Amount Should Be: BDT {course.totalAmount}</p>
                    {/* <div className="flex items-center gap-4">
                        <p className="regular_price">Discounted Price: ${discountedPrice}</p>
                        <p className="regular_price">Regular Price: <del>${regularPrice}</del></p>
                    </div> */}
                </div>
            </div>

            {/* <div className="flex items-center gap-3">
                <div>
                    <Link to={`/update-course/${_id}`} className='btn bg-yellow-400'>Update</Link>
                </div>
                <div onClick={() => handleDeleteCourse(_id)} className="delete_course text-2xl text-red-600 cursor-pointer">
                    <MdDelete />
                </div>
            </div> */}
        </div>
  )
}

export default MyOrderItem
