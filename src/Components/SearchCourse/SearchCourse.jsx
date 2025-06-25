import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from "react-icons/ci";
import HeaderSearchDropdown from '../HeaderSearchDropdown/HeaderSearchDropdown';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';

const SearchCourse = ({placeholder}) => {

  // const [searchTerm, setSearchTerm] = useState('')
  // const {allCourses} = useContext(courseContext)
  // const [searchedCourses, setSearchedCourses] = useState([])

  // useEffect(()=>{
  //   const newCourses =  allCourses.filter((course) => course.title.toLowerCase().startsWith(searchTerm.toLowerCase()))
  //   setSearchedCourses(newCourses)
  // },[searchTerm])



  return (
    <div className='search_course border border-borderColor px-5 py-2 rounded-full flex items-center gap-2 relative'>
        {/* <CiSearch/>
        <input onChange={(e)=> setSearchTerm(e.target.value)} value={searchTerm} className='focus:outline-none' type="text" placeholder={placeholder} />
        {searchTerm !== '' && 
          <div className="header_search_dwopdown absolute top-full bg-yellow-400 w-full left-0 py-3 z-10 rounded-lg">
            {searchedCourses.length === 0 ?
              <p className='text-center font-bold'>No Course available</p>
            :
              searchedCourses.map((course, index) => {
                return <HeaderSearchDropdown key={index} course = {course} searchedCourses = {searchedCourses}/>
              })
            }
          
          </div>
        } */}
    </div>
  )
}


SearchCourse.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default SearchCourse
