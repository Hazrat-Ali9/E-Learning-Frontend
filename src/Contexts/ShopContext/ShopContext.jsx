import React, { createContext, useContext, useState } from 'react'
import { courseContext } from '../CourseContext/CourseContext'

const shopContext = createContext(null)

const ShopContext = (props) => {

    const [cart, setCart] = useState([])

    // Handle Enroll Button
  const handleEnrollButton = (allCourses, setAllCourses, setCart, id) => {
    allCourses.map((courseItem) => {
        if(courseItem.id === id){
            if(!courseItem.isOnCart){
                setCart((prevCarItems) => [...prevCarItems, courseItem])
            }else{
                alert('Item Already In cart')
            }  
        }
    })
        
    setAllCourses((prevItems) => 
        prevItems.map((item) => 
            item.id === id ? {...item, isOnCart: true} : item
        )
    )
  }

    
    const contextValue = {
      cart,
      setCart,
      handleEnrollButton
    }

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  )
}

export {shopContext, ShopContext}
