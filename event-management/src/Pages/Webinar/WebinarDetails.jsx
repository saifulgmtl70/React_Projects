import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FaCalendar, FaClock } from 'react-icons/fa';



const WebinarDetails = () => {

    const courseDetails = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const details = courseDetails.find(details => details.id === idInt);

    return (
        <main>
            <Header></Header>


            <section>
                <div className="">
                    <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/SBctgMQ/pngtree-education-training-cartoon-illustrator-style-image-20669.jpg)'}}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-3xl lg:text-6xl font-bold mb-5">Webinar Details</h1>
                                <p className="text-xl"><Link className="font-bold text-green-600" to="/">Home</Link> / Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-12 py-10">
                <div className="mx-auto">
                    <img src={details.image} alt="" className="w-full lg:w-8/12 mx-auto mb-10 relative" />
                    <div className="lg:flex justify-between items-center absolute shadow-2xl bg-slate-300 hidden lg:w-6/12 px-12 py-7  lg:mx-72 -mt-16">
                        <p className='flex items-center gap-1'><FaCalendar className=' text-red-500'></FaCalendar> <span className='text-slate-700'> {details.date} </span> </p>
                        <p className='flex items-center gap-1'><FaClock className=' text-red-500'></FaClock> <span className='text-slate-700'>{details.time}</span> </p>
                        <p className="bg-rose-400 px-1 py-2 rounded-md">Free</p>

                    </div>

                    <div className="mt-32 mb-5">
                        <h2 className="text-4xl text-start font-bold">About Webinar</h2>
                        <p className="text-lg text-slate-400 mt-3">{details.webinar_description}</p>
                    </div>
                    <div>
                        <h2 className="text-4xl text-stone-800 font-bold mb-4">What You Will Learn</h2>
                        <p>{details.what_you_learn_description}</p>
                    </div>
                </div>
            </section>

            <section className="px-12 bg-neutral text-neutral-content">
                <Footer></Footer>
            </section>
        </main>
    );
};

export default WebinarDetails;