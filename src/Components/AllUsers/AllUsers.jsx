import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UserItemList from '../UserItemList/UserItemList'
// all users
const AllUsers = () => {

    const loadedUsers = useLoaderData()

  return (
    <div id='all_users'>
      {loadedUsers.length > 0 && loadedUsers.map((user) => {
        return <UserItemList key = {user?._id} user = {user}/>
      })}
    </div>
  )
}

export default AllUsers
