import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from '../../Firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Swal from 'sweetalert2'
// auth context
export const authContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Registration with email and password
    const createUser = (email, password, name, photoUrl) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login in with google
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
            .then(result => {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Login With google Successful!",
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('google', result.user)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error.code}. ${error.message}`
                })
            })
    }


    // Login with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Update user profile
    const profileUpdate = (updatedInfo) => {
        return updateProfile(auth.currentUser, updatedInfo)
            .then(() => {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Profile Updated",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error.code}. ${error.message}`
                })
            })
    }


    // Sign out
    const userSignOut = () => {
        return signOut(auth)
    }


    // Currently Signed In user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    })

    const authContextValue = {
        auth,
        createUser,
        profileUpdate,
        signInWithGoogle,
        signIn,
        user,
        loading,
        setLoading,
        userSignOut,
    }

    return (
        <authContext.Provider value={authContextValue}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext
