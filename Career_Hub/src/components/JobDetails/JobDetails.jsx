import { useLoaderData, useParams } from "react-router-dom";

 
const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} =useParams();
    const idInt =parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    console.log(job);


    return (
        <section className="">
            <h2 className="text-center">Jobs Details of: </h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">
                <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>


        </section>
    );
};

export default JobDetails;