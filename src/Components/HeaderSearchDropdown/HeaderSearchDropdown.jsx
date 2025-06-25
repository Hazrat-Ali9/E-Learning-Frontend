import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSearchDropdown = ({course}) => {
  return (
    <div id='header_search_dropdown'>
      <ul className='flex flex-col items-center gap-3'>
        <Link to={`/single-product/${course.id}`}>
            <li className='flex items-center gap-3 px-3 mb-3 border-b border-gray-100 py-2'>
                <div>
                    <img className='max-w-[110px]' src={course.thumbnail_url} alt='course image' />
                </div>
                <div>
                    <h3 className='font-bold text-sm'>{course.title}</h3>
                    <p>${course.discounted_price}</p>
                </div>
            </li>
        </Link>
      </ul>
    </div>
  )
}

export default HeaderSearchDropdown
