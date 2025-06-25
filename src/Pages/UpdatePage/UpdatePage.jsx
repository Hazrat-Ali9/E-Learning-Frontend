import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdatePage = () => {

    const courseToBeUpdated = useLoaderData()

    console.log(courseToBeUpdated)

    const { _id, title, thumbnailUrl, description, regularPrice, discountedPrice, category } = courseToBeUpdated

    const updatedCourse = { title, thumbnailUrl, description, regularPrice, discountedPrice, category, isOnCart: false, }

    const handleUpdateCourse = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/courses/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center-center",
                        icon: "success",
                        title: "Course updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(data)
            })
            .catch(error => {
                console.log('Error while updating course', error)
            })
    }

    return (
        <div id='update_page' className='py-20'>
            <h1 className='font-bold text-center mb-10 text-4xl'>Update Course</h1>
            <form onSubmit={handleUpdateCourse} className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
                <div className="input-group mb-4">
                    <input name='title' defaultValue={title} type="text" placeholder="Course Title" className="input input-bordered w-full" />
                </div>
                <div className="input-group mb-4">
                    <input name='thumbnailUrl' defaultValue={thumbnailUrl} type="text" placeholder="Thumbnail URL" className="input input-bordered w-full" />
                </div>
                <div className="input-group mb-4">
                    <textarea name='description' defaultValue={description} type="text" placeholder="Course Description" className="textarea input-bordered w-full" />
                </div>
                <div className="input-group mb-4">
                    <input name='regularPrice' defaultValue={regularPrice} type="number" placeholder="Regular Price" className="input input-bordered w-full" />
                </div>
                <div className="input-group mb-4">
                    <input name='discountedPrice' defaultValue={discountedPrice} type="number" placeholder="Discounted Price" className="input input-bordered w-full" />
                </div>
                <div className="input-group mb-4">
                    <input name='category' defaultValue={category} type="text" placeholder="Course Category" className="input input-bordered w-full" />
                </div>

                <div className="input-group">
                    <input type="submit" value='Update Course' className='btn w-full btn-primary' />
                </div>
            </form>
        </div>
    )
}

export default UpdatePage
