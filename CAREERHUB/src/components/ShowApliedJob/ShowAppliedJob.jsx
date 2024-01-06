

// eslint-disable-next-line react/prop-types
const ShowAppliedJob = ({job}) => {

    // eslint-disable-next-line react/prop-types
    const{logo, job_title, company_name, remote_or_onsite, job_type,location, salary} = job

    return (
        <div className="card card-side w-9/12 px-10 py-12 mx-auto bg-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-6  mb-7 rounded-md">
            <div className="flex flex-col lg:flex-row items-center">
                <figure className="px-8 py-20 w-64 rounded-md bg-slate-200">
                    <img src={logo} className="" alt="Movie"/>
                </figure>

                <div className="card-body text-start ">
                    <h2 className="card-title text-slate-800 font-medium text-2xl"> {job_title} </h2>
                    <h2 className="text-slate-600 text-lg font-normal"> {company_name} </h2>
                    <div className="flex items-center gap-2">
                        <h2 className="border-2 border-indigo-400 px-5 py-2 rounded-md text-cyan-800 font-semibold mb-1"> {remote_or_onsite} </h2>
                        <h2 className="border-2 border-indigo-400 px-10 py-2 rounded-md text-cyan-800 font-semibold mb-1"> {job_type} </h2>

                    </div>

                    <div className="flex gap-8 items-center">
                        <h2 className='text-lg text-slate-500'> <i className="fa-solid fa-location-dot "></i>  {location} </h2>
                        <h2 className='text-lg text-slate-500'> <i className="fa-solid fa-dollar-sign"></i> {salary} </h2>
                    </div>
                </div>
            </div>

            <div className="card-actions justify-end">
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded text-white'>View Details</button>
            </div>


        </div>
    );
};

export default ShowAppliedJob;