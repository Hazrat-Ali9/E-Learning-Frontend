import React, { useContext } from 'react'
import CartProducts from '../../Components/CartProducts/CartProducts'
import CartCalculation from '../../Components/CartCalculation/CartCalculation'
import { shopContext } from '../../Contexts/ShopContext/ShopContext'
import emptyCart from '../../assets/empty-cart.jpg'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'

const CartPage = () => {

    const {cartProducts} = useContext(courseContext)

  return (
    <div id='cart_page' className='py-8'>
      <div className="container">
        <h1 className='text-center font-bold text-4xl mb-10'>{cartProducts.length > 0 ? 'Your Cart' : 'Opps! Your Cart is Empty'}</h1>

        <div className={`cart_container mt-5`}>
            {cartProducts.length > 0 ?
                <div className='flex gap-5 lg:gap-12 w-full'>
                    <div className="cart_products w-[60%]">
                        <CartProducts/>
                    </div>
                    <div className="cart_calculations w-[40%]">
                        <CartCalculation/>
                    </div>
                </div>
            :
                <div className='flex justify-center'>
                    <img className='w-[500px]' src={emptyCart} alt="cart" />
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default CartPage
