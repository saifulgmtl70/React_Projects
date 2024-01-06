import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagramSquare } from 'react-icons/fa';


const SeeDetails = () => {

    const courseDetails = useLoaderData();
    const {id} = useParams();
    
    const idInt = parseInt(id)

    const details = courseDetails.find(details => details.id === idInt);

    return (
        <main>
            <Header></Header>
            
            <div className="">
                <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/SBctgMQ/pngtree-education-training-cartoon-illustrator-style-image-20669.jpg)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5">Details</h1>
                            <p className="text-xl"><Link className="font-bold text-green-600" to="/">Home</Link> / Details</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="px-14 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                    <div className="py-12 shadow-lg px-5  border">
                        <img src={details.image} alt="" />
                        <h2 className="text-3xl font-medium mt-5 mb-3">{details.Course_Name}</h2>
                        <div className="flex justify-between items-center mb-5">
                            <h2>Categories: <span className="bg-slate-300 text-slate-600 font-bold px-3 py-2 mt-3">{details.Category_Name}</span></h2>
                            <p className="text-lg text-rose-600 font-bold">Price: ${details.Price}</p>
                        </div>
                        <p className="text-slate-500">{details.Description}</p>
                    </div>

                    <div className="mx-auto shadow-lg px-4 py-3">
                        <h2 className="text-3xl lg:text-5xl mb-6 text-sky-950 font-bold">Author Info: </h2>
                        <div>
                            <img src={details.Author_Img} alt="" className="w-80 h-56 " />
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium my-4">{details.Author}</h2>
                            <p className="text-lg text-slate-500">{details.Author_Designation}</p>
                        </div>
                        <div>
                            <h3 className="text-lg mt-5 mb-5">Follow Him on Social Media</h3>
                            <div className="flex justify-center items-center gap-5">
                                <a href="#" className="text-2xl text-sky-800"> <FaFacebookF></FaFacebookF> </a>
                                <a href="#" className="text-2xl text-sky-600"> <FaTwitter></FaTwitter> </a>
                                <a href="#" className="text-2xl text-sky-900"> <FaLinkedinIn></FaLinkedinIn> </a>
                                <a href="#" className="text-2xl text-rose-700"> <FaInstagramSquare></FaInstagramSquare> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-7 lg:px-14 bg-neutral text-neutral-content">
                <Footer></Footer>
            </div>
        </main>
    );
};

export default SeeDetails;