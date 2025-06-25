import React, { useContext, useState } from 'react'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import { FaGoogle } from "react-icons/fa6"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {

    const { createUser, signInWithGoogle, profileUpdate } = useContext(authContext)

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        const confirmPassword = form.ConfirmPassword.value
        const email = form.email.value

        if (name === '' || photoUrl === '' || password === '' || confirmPassword === '' || email === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill out the required fields!"
            })
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password is not matching! Try again."
            })
        } else {
            createUser(email, password, name, photoUrl)
                .then((userCredential) => {
                    console.log(userCredential.user)
                    const createdAt = userCredential?.user?.metadata?.creationTime
                    const newUser = { name, photoUrl, email, password, createdAt }
                    // Save new user info to the databas
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                console.log('inserted user')
                            } else {
                                console.log('Error while inserting')
                            }
                        })

                    // Show Success Message
                    Swal.fire({
                        position: "center center",
                        icon: "success",
                        title: "Registratin Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    })

                    profileUpdate({ displayName: name, photoURL: photoUrl })
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error.code}. ${error.message}`
                    })
                })
        }

    }

    return (
        <div id='registration_page'>
            <div className="container">
                <div className="hero">
                    <div className="hero-content w-11/12 md:w-10/12 lg:w-6/12 block">

                        <h1 className='text-center mb-8 font-bold text-3xl'>Sign Up</h1>

                        <button onClick={() => signInWithGoogle()} className='btn btn-lg mx-auto w-full bg-yellow-500'><FaGoogle />Signup with Google
                        </button>

                        <p className='text-center my-6 text-lg font-bold'>or</p>

                        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                            <form onSubmit={handleRegistration} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name='photoUrl' type="text" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered"  />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input name='ConfirmPassword' type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label block">
                                        Already have na account? <Link className='underline' to="/login">Login Now</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
