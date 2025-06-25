import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const UserItemList = ({user}) => {

    const {name, photoUrl, email, _id} = user

    return (
        <div id='course_item_list' className='bg-success py-3 px-4 rounded-lg mb-3 text-white flex items-center justify-between'>
            <div className="flex items-center gap-5">
                <div className="course_thumbnail">
                    <img className='w-[120px] rounded-lg' src={photoUrl} alt="course thumbnail" />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>{name}</h3>
                    <p>Email: {email}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div>
                    <Link to={`/update-course/${_id}`} className='btn bg-yellow-400'>Update</Link>
                </div>
                <div className="delete_course text-2xl texzt-red-600 cursor-pointer">
                    <MdDelete />
                </div>
            </div>
        </div>
    )
}

export default UserItemList
