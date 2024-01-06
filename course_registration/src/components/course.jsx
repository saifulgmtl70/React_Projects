import '../index.css'
import '../fontawesome.css'
// eslint-disable-next-line react/prop-types
const Course = ({course, handleSelect}) => {
    

    // eslint-disable-next-line react/prop-types
    const{img, course_title, course_details, price, credit} = course;
    // console.log(img);
    
    return (
        <div>
            <div className="card h-auto w-full lg:w-72 bg-slate-50 shadow-xl rounded-md">
                <figure className="">
                    <img src={img}  className="pt-3 w-80 lg:w-auto h-36 mb-4 rounded-md mx-auto" />
                </figure>
                <div className="card-body items-center text-start px-6 pb-4">
                    <h2 className="card-title text-slate-900 text-3xl mb-4"> {course_title} </h2>
                    <p className='text-slate-700 text-lg'> {course_details} </p>
                    <div className='flex justify-evenly items-center mt-4'>
                        <p className='text-slate-600'> <i className="fa-solid fa-dollar-sign text-slate-700 text-xl"></i> Price: {price} </p>
                        <p className='text-slate-600'> <i className="fa-solid fa-book-open text-slate-700 font-medium"></i> Credit: {credit} hr </p>
                    </div>
                    <div className="card-actions text-center mt-4 bg-rose-500 py-2 text-white rounded-md">
                    <button
                        id="selectbtn"
                        className="btn btn-primary"
                        // eslint-disable-next-line react/prop-types
                        onClick={() => handleSelect(course.course_title, course.credit, course.price)}>Select </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;