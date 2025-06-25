import React, { useContext, useState } from 'react'
import ProfileSidebar from '../../Layouts/ProfileSidebar/ProfileSidebar'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import Swal from 'sweetalert2'
import { Link, Outlet } from 'react-router-dom'

const ProfilePage = () => {
  
  return (
    <div id='profile_page'>
      <div className="container py-10">
        <div className='md:flex gap-10'>
          <div className='md:w-4/12 mb-10'>
            <ProfileSidebar />
          </div>
          <div className="md:w-8/12">
              <div className="buttons flex justify-center gap-3">
                <Link to='/profile/update-profile' className='btn bg-success text-white'>Update Profile</Link>
                <Link to='/profile/my-courses' className='btn bg-success text-white'>My Orders</Link>
              </div>
             
             <div className="mt-10">
              <Outlet/>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
