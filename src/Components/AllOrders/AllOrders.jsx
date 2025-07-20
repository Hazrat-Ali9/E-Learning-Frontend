import React from 'react'
import { useLoaderData } from 'react-router-dom'
import OrderItemList from '../OrderItemList/OrderItemList'
// all orders
const AllOrders = () => {

    const loadedOrders = useLoaderData()

  return (
    <div id='all_orders'>
      {loadedOrders.length > 0 && loadedOrders.map((order) => {
        return <OrderItemList key={order._id} order = {order}/>
      })}
    </div>
  )
}

export default AllOrders
