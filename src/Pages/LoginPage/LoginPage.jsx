import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import { FaGoogle } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const { signInWithGoogle, signIn } = useContext(authContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then((result) => {

                const lastSignInTime = result?.user?.metadata?.lastSignInTime
                const loginInfo = {email, lastSignInTime}

                // Update last login time to database
                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('SignIn info updated in db', data)
                })
                .catch(error => {
                    console.log(error.code, error.message)
                })

                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error.code}. ${error.message}`
                })
            });
    }

    return (
        <div id='login'>
            <div className="container">
                <div className="hero">
                    <div className="hero-content w-11/12 md:w-10/12 lg:w-6/12 block">

                        <h1 className='text-center mb-8 font-bold text-3xl'>Sign In</h1>

                        <button onClick={() => signInWithGoogle()} className='btn btn-lg mx-auto w-full bg-yellow-500'><FaGoogle />Signup In Google
                        </button>

                        <p className='text-center my-6 text-lg font-bold'>or</p>

                        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label block">
                                         Don't have na account? <Link className='underline' to="/registration">Register Now</Link>
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

export default LoginPage
