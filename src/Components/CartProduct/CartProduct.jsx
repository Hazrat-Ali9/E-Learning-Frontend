import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { shopContext } from '../../Contexts/ShopContext/ShopContext';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import Swal from 'sweetalert2';


const CartProduct = ({cartItem}) => {

    const {_id, thumbnailUrl, title, regularPrice, discountedPrice} = cartItem
    const {courses,setCourses, cartProducts, setCartProducts} = useContext(courseContext)

    // Delete Cart Item
    const handleDeleteCartProduct = (id) => {

        fetch(`http://localhost:5000/courses/${id}`, {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({isOnCart: false})
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    position: "center-center",
                    icon: "success",
                    title: "Course Deleted Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(error => {
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              });
        })

        const remainingCourses = cartProducts.filter((course) => course._id !== id)
        setCartProducts(remainingCourses)
    }

  return (
    <div id='cartItem' className='flex items-center justify-between gap-3 border py-2 px-2 rounded-md mb-3'>
        <div className='flex items-center gap-3'>
            <div className="cart_item_image">
                <img className='w-[130px] rounded-md' src={thumbnailUrl} alt={title} />
            </div>
            <div className="cart_item_info">
                <h3 className='font-bold text-lg'>{title}</h3>
                <p>${discountedPrice}</p>
            </div>
        </div>
        <div className='text-2xl text-red-600 cursor-pointer'>
            <MdDeleteForever onClick={()=> handleDeleteCartProduct(_id)} />
        </div>
    </div>
  )
}

export default CartProduct
