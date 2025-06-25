import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MyOrderItem from '../MyOrderItem/MyOrderItem'

const MyOrders = () => {

  const loadedOrders = useLoaderData()
  console.log('all' ,loadedOrders)

  return (
    <div className='my_courses'>
      <div className="container">
        {loadedOrders.length > 0 && loadedOrders.map((item) => {
          return <MyOrderItem course = {item} />
        })}
      </div>
    </div>
  )
}

export default MyOrders
