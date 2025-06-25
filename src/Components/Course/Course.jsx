import React, { useContext } from 'react'
import { PropTypes } from 'prop-types';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import { Link } from 'react-router-dom';
import { shopContext } from '../../Contexts/ShopContext/ShopContext';
import Swal from 'sweetalert2';

const Course = ({ course }) => {

    const { shortenText, setCourses } = useContext(courseContext)
    const { _id, title, thumbnailUrl, description, price, category, isOnCart, regularPrice, discountedPrice } = course

    const handleEnrollButton = () => {
        fetch(`http://localhost:5000/courses/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isOnCart: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Course successfully enrolled!",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: data.message || "Could not enroll!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating isOnCart:", error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
    }

    return (
        <div id='Course'>
            <div className="card lg:card-compact bg-base-100 w-full shadow-xl">
                <figure>
                    <Link className='w-full' to={`/single-course/${_id}`}>
                        <img className='w-full'
                            src={thumbnailUrl}
                            alt="Shoes" />
                    </Link>
                </figure>
                <div className="card-body px-50 min-h-[230px]">
                    <Link to={`/single-course/${_id}`}>
                        <h2 className="card-title text-xl">{title}</h2>
                    </Link>
                    <p>{shortenText(description, 50)}</p>
                    <div className="prices flex items-center gap-3">
                        <span className="discounted_price font-bold">
                            BDT {discountedPrice}
                        </span>
                        <span className="regular_price font-bold">
                            <del>BDT {regularPrice}</del>
                        </span>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleEnrollButton} className="w-full btn btn-warning">{isOnCart ? 'Added To Cart' : 'Add To Cart'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course
