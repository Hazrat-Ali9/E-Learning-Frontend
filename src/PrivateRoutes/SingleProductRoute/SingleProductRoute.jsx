import React, { useContext } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'
import LoadingPage from '../../Pages/LoadingPage/LoadingPage'
import { useNavigate } from 'react-router-dom'

const SingleProductRoute = ({children}) => {

    const {loading, user} = useContext(courseContext)
    const navigate = useNavigate()

    if(loading){
        return <LoadingPage/>
    }else if(user.email){
        return children
    }

    return navigate('/login')

}

export default SingleProductRoute
