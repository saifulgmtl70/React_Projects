import { FaCalendar, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Webinar = ({webinar}) => {

    // eslint-disable-next-line react/prop-types
    const {image, webinar_name, date, time, webinar_description, id } = webinar;

    return (
        <div className="card card-side flex-col lg:flex-row bg-base-100 h-full lg:h-96 shadow-2xl">
            <img src={image} alt="Movie" className="w-full lg:w-6/12 h-auto lg:h-80 m-0 lg:m-5 rounded-md"/>
            <div className="card-body">
                <h2 className="card-title">{webinar_name}</h2>
                <div className="flex items-center my-4 gap-6">
                    <p className='flex items-center gap-1'><FaCalendar className=' text-red-500'></FaCalendar> <span className='text-slate-700'> {date} </span> </p>
                    <p className='flex items-center gap-1'><FaClock className=' text-red-500'></FaClock> <span className='text-slate-700'>{time}</span> </p>

                </div>
                <p className='text-lg text-slate-500 font-normal w-full '> {webinar_description} </p>
                <div className="card-actions justify-start">
                    <button className="bg-transpaent border border-orange-500 hover:bg-red-500 hover:text-white px-8 py-2 rounded-md">
                        <Link to={`/webinar/${id}`}>Read More</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Webinar;