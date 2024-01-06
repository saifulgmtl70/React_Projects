
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(3);


    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);


    return (
        <section className="px-3 lg:px-10 py-12">
            <div className="text-5xl text-center mb-10">
                <h2 className="text-5xl text-center font-medium mb-4">Featured Jobs</h2>
                <p className="text-lg font-normal">Explore thousands of job opportunaties with all the information you need. Its your future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength=== jobs.length ? 'hidden' : 'text-center mt-10' }>
                <button onClick={() => setDataLength(jobs.length)} className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded text-white'> Show all jobs </button>
            </div>

        </section>
    );
};

export default FeaturedJob;