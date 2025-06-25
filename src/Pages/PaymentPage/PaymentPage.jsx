import React, { useContext } from 'react'
import bkashLogo from '../../assets/bkash-logo.webp'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'

const PaymentPage = () => {

    const {user} = useContext(authContext)
    const {getTotalAmount, cartProducts} = useContext(courseContext)

    const handleOrderSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const bkashNumber = form.bkashNumber.value
        const transectionId = form.transectionId.value
        const userEmail = user?.email
        const userName = user?.displayName
        const userPhotoUrl = user?.photoURL
        const totalAmount = getTotalAmount(cartProducts)
        
        const order = {
            bkashNumber,
            transectionId,
            userEmail,
            userName,
            totalAmount,
            userPhotoUrl
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            console.log('order success')
        })
        .catch(error => {
            console.log(error)
        })

        console.log(order)
    }

    return (
        <div id='payment_page'>
            <div className="container py-10">
                <h2 className='font-bold text-3xl text-center mb-5'>Make Your Payment</h2>

                <div className="bkash_sandbox">
                    <div className="box w-11/12 md:w-10/12 lg:w-6/12 shadow-xl border mx-auto py-10 px-10 rounded-md">
                        <img className='w-[150px] mx-auto mb-5' src={bkashLogo} alt="" />
                        <ul>
                            <li>১/ আপনার Bkash App এ যান অথবা *247# ডায়াল করুন</li>
                            <li>২/ "Send Money" সিলেক্ট করুন</li>
                            <li>৩/ নিচের বিকাশ নাম্বার টি Enter করুন</li>
                            <li>৪/ <b>টোটাল এমাউন্ট</b> (BDT {getTotalAmount(cartProducts)}) Enter করুন</li>
                            <li>৫/ এখন আপনার Bkash একাউন্টের পিন নম্বর Enter করে ট্রাঞ্জেকশন টি কনফার্ম করুন</li>
                            <li>৬/ পেমেন্ট কনফার্মেশন মেসেজ থেকে ট্রাঞ্জেকশন আইডি কপি করে নিচে Enter করুন</li>
                            <li>৭/ এর পর অর্ডার টি সাবমিট করুন</li>
                            <li>৮/ অর্ডার টি কনফার্ম করার পর আপনার ডাউনলোড পেইজ থেকে প্রোডাক্ট গুলো ডাউনলোড করে নিতে পারবেন। যেকোনো প্রয়োজনে মেসেঞ্জার বা হোয়াটস এপ এ যোগাযোগ করুন।</li>
                        </ul>

                        <form onSubmit={handleOrderSubmit}>
                            <ul className='mt-5'>
                                <li>এই নম্বরে বিকাশ করুন: 01957282230</li>
                                <li>
                                    <input name='bkashNumber' type='text' placeholder='Your Bkash Number' className='input input-bordered w-full mt-2' />
                                </li>
                                <li>
                                    <input name='transectionId' type='text' placeholder='Transection ID' className='input input-bordered w-full mt-2' />
                                </li>
                                <li>
                                    <input className='btn bg-yellow-500 font-bold w-full mt-3' type="submit" value='Submit Order' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
