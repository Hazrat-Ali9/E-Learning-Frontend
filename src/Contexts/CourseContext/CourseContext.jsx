import React, { createContext, useEffect, useState } from 'react'

const courseContext = createContext(null)

const CourseContext = (props) => {

  const [isLogedIn, setIsLogedIn] = useState(true)
  const [courses, setCourses] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/courses/')
      .then(res => res.json())
      .then(data => {
        setCourses(data)
      })
  }, [])

  useEffect(() => {
    const productIsInCart = courses.filter(course => course.isOnCart)
    setCartProducts(productIsInCart)
  }, [courses])


  // Get Total amount
  const getTotalAmount = (cartProducts) => {
    return cartProducts.reduce((acc, curr) => {
        return acc + parseInt(curr.discountedPrice)
    }, 0)
}

  // Short a text
  const shortenText = (text, numOfChar) => {
    return text.length > numOfChar ? text.substring(0, numOfChar) + '...' : text
  }

  // Get product using ID
  const getCourseUsingId = (productsToLoop, productIdToFind) => {
    const currentProduct = productsToLoop.find((productItem) => productItem.id === Number(productIdToFind))
    return currentProduct
  }


  const contextValue = {
    courses,
    shortenText,
    getCourseUsingId,
    isLogedIn,
    setIsLogedIn,
    cartProducts,
    setCartProducts,
    setCourses,
    getTotalAmount
  }

  return (
    <courseContext.Provider value={contextValue}>
      {props.children}
    </courseContext.Provider>
  )
}

export { CourseContext, courseContext }
