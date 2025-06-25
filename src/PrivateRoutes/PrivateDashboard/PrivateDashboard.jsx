import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import LoadingPage from '../../Pages/LoadingPage/LoadingPage'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import { useNavigate } from 'react-router-dom'

const PrivateDashboard = ({children}) => {

    const {loading, user} = useContext(authContext)
    const navigate = useNavigate()

    if(loading){
        return <LoadingPage/>
    }else if(user?.email){
        return children
    }

  return navigate('/login')
}

export default PrivateDashboard
