import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { IoMdAddCircle } from "react-icons/io";
// add course

const AddCourse = () => {

  const handleAddCourse = (e) => {
    e.preventDefault()
    const form = e.target
  
    const title = form.title.value
    const thumbnailUrl = form.thumbnailUrl.value
    const description = form.description.value
    const regularPrice = form.regularPrice.value
    const discountedPrice = form.discountedPrice.value
    const category = form.category.value
    
    const moduleTitle = form.moduleTitle.value
    const moduleVideoLink = form.moduleVideoLink.value
  
    const newCourse = { title, thumbnailUrl, description, regularPrice, discountedPrice, category, isOnCart: false, module: [
      {
        moduleTitle,
        moduleVideoLink
      }
    ]}
  
    fetch(`http://localhost:5000/add-course`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCourse)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Course added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
        console.log(data)
      })
      .catch(error => {
        console.log('Error while adding course', error)
      })
  
  }

  return (
    <div id='add_course'>
      <form onSubmit={handleAddCourse} className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
        <div className="input-group mb-4">
          <input name='title' type="text" placeholder="Course Title" className="input input-bordered w-full" />
        </div>
        <div className="input-group mb-4">
          <input name='thumbnailUrl' type="text" placeholder="Thumbnail URL" className="input input-bordered w-full" />
        </div>
        <div className="input-group mb-4">
          <textarea name='description' type="text" placeholder="Course Description" className="textarea input-bordered w-full" />
        </div>
        <div className="input-group mb-4">
          <input name='regularPrice' type="number" placeholder="Regular Price" className="input input-bordered w-full" />
        </div>
        <div className="input-group mb-4">
          <input name='discountedPrice' type="number" placeholder="Discounted Price" className="input input-bordered w-full" />
        </div>
        <div className="input-group mb-4">
          <input name='category' type="text" placeholder="Course Category" className="input input-bordered w-full" />
        </div>

        <div className='add_module my-10'>
          <div className='flex items-center justify-between mb-5'>
            <h3 className='font-bold text-lg'>Add Modules</h3>
            <IoMdAddCircle className='text-3xl cursor-pointer' />
          </div>

          <div className="module">
            <div className="input-group mb-4">
              <input name='moduleTitle' type="text" className='input input-bordered w-full' placeholder='Module Title' />
            </div>
            <div className="input-group mb-4">
              <input name='moduleVideoLink' type="text" className='input input-bordered w-full' placeholder='Module video link' />
            </div>
          </div>

        </div>

        <div className="input-group mt-10">
          <input type="submit" value='Add Course' className='btn w-full btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default AddCourse
