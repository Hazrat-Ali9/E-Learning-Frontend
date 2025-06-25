import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContex/AuthContext'

const ProfileSidebar = () => {

    const {user} = useContext(authContext)

    return (
        <div id='profile_sidebar' className='shadow-xl px-3 py-5 rounded-lg h-full'>
            <div className="mask mask-squircle w-full">
                <img className='mx-auto w-4/12' src={user?.photoURL} />
            </div>
            <div className="user_info text-center">
                <h3 className='my-2'>{user?.displayName}</h3>
                <p>{user?.email}</p>
            </div>
        </div>
    )
}

export default ProfileSidebar
