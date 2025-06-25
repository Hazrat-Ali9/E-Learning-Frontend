import React, { useContext } from 'react'
import { shopContext } from '../../Contexts/ShopContext/ShopContext'
import CartProduct from '../CartProduct/CartProduct'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'

const CartProducts = () => {

    const {cartProducts} = useContext(courseContext)

  return (
    <div>
      {cartProducts.map((cartItem) => {
            return <CartProduct key={cartItem._id} cartItem = {cartItem}/>
      })} 
    </div>
  )
}

export default CartProducts
