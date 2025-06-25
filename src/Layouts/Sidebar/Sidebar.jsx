import React, { useContext, useEffect, useState } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'
import { MdHeight } from 'react-icons/md'

const Sidebar = ({filterCourse, setFiltercourse}) => {

    const [searchTerm, setSearchTerm] = useState('')
    const {allCourses} = useContext(courseContext)
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const handleChange = (e) => {
        const serachValue = e.target.value
        setSearchTerm(serachValue)
    }

    useEffect(()=>{
        const newCourses = allCourses.filter((course) =>{
            return course.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        })

        setFiltercourse(newCourses)
    },[searchTerm])


    const handleFilterByPrice = (minPrice, maxPrice) => {
        if(minPrice > maxPrice){
            alert('Minimum price can not be greater than Maximum Price')
        }else if(minPrice === '' && maxPrice == ''){
            alert('Please insert price range')
        }else{
            const newCourse = allCourses.filter((course) => {
                return course.discounted_price >= minPrice && course.discounted_price <= maxPrice
            })
            setFiltercourse(newCourse)
        }
    }


    
  return (
    <div id='sidebar'>
      <div className="search_course mb-8">
        <h3 className='font-bold text-xl mb-3'>Search Course</h3>
        <label className="input input-bordered flex items-center gap-2">
            <input onChange={(e)=> handleChange(e)} type="text" value={searchTerm} className="grow" placeholder="Search Course ..." />
        </label>
      </div>

      <div className="filter_by_price">
        <h3 className='font-bold text-xl mb-3'>Filter By Price</h3>
            <div className="flex items-center gap-3">
                <input type="number" onChange={(e) => setMinPrice(e.target.value)} value={minPrice} placeholder="Lowest Price" className="input input-bordered w-full max-w-xs" />
                <input type="Number" onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} placeholder="Heighst Price" className="input input-bordered w-full max-w-xs" />
            </div>
            <button onClick={()=>handleFilterByPrice(minPrice, maxPrice)} className='btn btn-success text-white w-full mt-3'>Filter By Price</button>
      </div>
    </div>
  )
}

export default Sidebar
