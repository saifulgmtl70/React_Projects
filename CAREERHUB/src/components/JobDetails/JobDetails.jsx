import { useLoaderData, useParams } from "react-router-dom";
import './jobDetails.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveJobApplication } from "../../Utility/LoalStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} =useParams();
    const idInt =parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    // console.log(job);

    const handleApplyNow = () =>{
        saveJobApplication(idInt)
        toast('You have applied successfully');
    }


    return (
        <main className="">
            <ToastContainer></ToastContainer>

            <section className="bg_image bg-gray-50 bg-second">
                <h2 className="text-center text-4xl text-slate-800 font-bold">Job Details</h2>
            </section>

            <section className="mb-20 mt-10 px-14 py-5">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-14 ">
                    <div className="h-auto rounded-lg w-11/12  lg:col-span-2">
                        <h2 className="text-xl text-slate-900 font-bold mb-8">Job Description: <span className="text-lg text-slate-600 font-normal"> {job.job_description} </span> </h2>

                        <h2 className="text-xl text-slate-900 font-bold mb-8">Job Responsibility: <span className="text-lg text-slate-600 font-normal"> {job.job_responsibility} </span> </h2>

                        <h2 className="text-xl text-slate-900 font-bold mb-8">Educational Requirements: <span className="text-lg text-slate-600 font-normal"> {job.educational_requirements} </span> </h2>

                        <h2 className="text-xl text-slate-900 font-bold mb-8">Experience: <span className="text-lg text-slate-600 font-normal"> {job.experiences} </span> </h2>
                    </div>

                    <div className="h-auto rounded-lg p-5 bg-gray-100">
                        <h2 className="text-slate-800 text-lg font-bold">Job details</h2>
                        <div className="divider"></div>
                        <h2 className="font-medium text-lg mb-3"> <i className="fas fa-dollar"></i> Salary : <span className="text-slate-700 font-normal"> {job.salary} (Per Month) </span></h2>

                        <h2 className="font-medium text-lg mb-3"> <i className="fas fa-calendar text-cyan-700 text-sm font-normal"></i> Job Title : <span className="text-slate-700 font-normal"> {job.job_title} </span></h2>

                        <h2 className="text-slate-800 text-lg font-bold mt-8">Contact Information</h2>
                        <div className="divider"></div>

                        <h2 className="font-medium text-lg mb-3"> <i className="fas fa-phone text-cyan-700 text-sm font-normal"></i> Phone : <span className="text-slate-700 font-normal"> {job.contact_information.phone} </span></h2>

                        <h2 className="font-medium text-lg mb-3"> <i className=" fa-regular fa-envelope text-cyan-700 text-sm font-normal"></i> Email : <span className="text-slate-700 font-normal"> {job.contact_information.email} </span></h2>

                        <h2 className="font-medium text-lg mb-3"> <i className=" fa-solid fa-location-dot text-cyan-700 text-sm font-normal"></i> Location : <span className="text-slate-700 font-normal"> {job.contact_information.address} </span></h2>

                        <button onClick={handleApplyNow} className='bg-rose-500 w-full mt-5 px-5 py-3 rounded text-white'>Apply now</button>
                    </div>
                    
                </div>


            </section>
        </main>
    );
};

export default JobDetails;