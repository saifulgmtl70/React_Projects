// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css'
import '../fontawesome.css'


// eslint-disable-next-line react/prop-types
const Course = ({course, handleSelect}) => {
    // eslint-disable-next-line react/prop-types
    const{img, course_title, course_details, price, credit} = course;
    return (
        
        <div className="card p-4 h-full w-72 bg-base-100 shadow-xl rounded-md">
            <figure>
                <img src={img} className="bg-gray-200 mt-3 h-36 mb-4 rounded-md mx-auto"  alt="" />
            </figure>
            <div className="card-body items-center text-start">
                <h2 className="card-title text-2xl font-bold text-gray-800 mb-3">{course_title}</h2>
                <p className='text-slate-600 mb-4 '>{course_details}</p>
                <div className='flex justify-around items-center'>
                    <p><i className="fa-solid fa-dollar-sign text-slate-700 text-xl"></i> Price: {price} </p>
                    <p> <i className="fa-solid fa-book-open text-slate-700 font-medium"></i> Credit:  {credit}hr </p>
                </div>
                <div className='text-center mt-4 bg-rose-600 py-2 rounded-md'>
                    <button
                        id="selectbtn"
                        className="btn btn-primary text-white"
                        // eslint-disable-next-line react/prop-types
                        onClick={() => handleSelect(course.course_title, course.credit, course.price)}>Select </button>
                </div>
                
            </div>
        </div>

    );
};

export default Course;