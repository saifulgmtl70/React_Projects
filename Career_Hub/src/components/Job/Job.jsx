import { Link } from 'react-router-dom';
import '../../../public/font.css';

// eslint-disable-next-line react/prop-types
const Job = ({job}) => {

    // eslint-disable-next-line react/prop-types
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-md px-3 py-8 border-2 rounded-md text-end">
            <img  className="object-left-top w-32 h-10 mx-4 mb-4" src={logo} alt="Shoes" />
            <div className="card-body text-start">
                <h2 className="card-title font-bold text-slate-600 text-2xl"> {job_title} </h2>
                <p className="text-slate-500 font-normal text-lg"> {company_name} </p>
                <div className="flex items-center gap-2">
                    <h2 className="border-2 border-indigo-400 px-5 py-2 rounded-md text-cyan-800 font-semibold mb-1"> {remote_or_onsite} </h2>
                    <h2 className="border-2 border-indigo-400 px-10 py-2 rounded-md text-cyan-800 font-semibold mb-1"> {job_type} </h2>

                </div>

                <div className="flex gap-8 items-center">
                    <h2 className='text-lg text-slate-500'> <i className="fa-solid fa-location-dot "></i>  {location} </h2>
                    <h2 className='text-lg text-slate-500'> <i className="fa-solid fa-dollar-sign"></i> {salary} </h2>
                </div>
                <div className='mt-4'>
                    <Link to={`/job/${id}`}>
                        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded text-white'>View Details</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Job;