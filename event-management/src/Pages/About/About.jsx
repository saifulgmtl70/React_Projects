import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './About.css'


import { SlBadge } from 'react-icons/sl';
import { TbLockAccess } from 'react-icons/tb';
import { FaUserTie, FaBlenderPhone,FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Footer from "../Footer/Footer";



const About = () => {
    return (
        <main>

            <Header></Header>
            
            <section className="">
                <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/SBctgMQ/pngtree-education-training-cartoon-illustrator-style-image-20669.jpg)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5">About Us</h1>
                            <p className="text-xl"><Link className="font-bold text-green-600" to="/">Home</Link> / About</p>
                        </div>
                    </div>
                </div>

            </section>


            <section className="px-7 py-12 lg:px-14 bg-base-200">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                   

                    <div className="">
                        <div className="">
                            <SlBadge className="text-6xl mx-auto mb-2 text-orange-500"></SlBadge>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg mb-2 text-sky-950 font-bold">Our Educational and Training Course are High Quality Based</h3>
                            <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <TbLockAccess className="text-6xl mx-auto mb-2 text-orange-500"></TbLockAccess>
                        </div>
                        <div className="text-center ">
                            <h3 className="text-lg mb-2 text-sky-950 font-bold">Life time Accessable Service</h3>
                            <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                        </div>
                    </div>




                    <div className="">
                        <div className="">
                            <FaUserTie className="text-6xl mx-auto mb-2 text-orange-500"></FaUserTie>
                        </div>
                        <div className="text-center ">
                            <h3 className="text-lg mb-2 text-sky-950 font-bold">Expert Trainers and Instructors</h3>
                            <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <FaBlenderPhone className="text-6xl mx-auto mb-2  text-orange-500"></FaBlenderPhone>
                        </div>
                        <div className="text-center ">
                            <h3 className="text-lg mb-2 text-sky-950 font-bold">Unlimited Support</h3>
                            <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                        </div>
                    </div>



                </div>
            </section>


            <section className="px-7 py-12 lg:px-14 bg-base-100">
                <h2 className="text-center text-4xl font-bold text-cyan-950 mb-12">Our Expert Trainers and Instructors</h2>
               
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                    <div>
                        <div className="box">
                            <div className="box_image">
                                <img src="https://i.ibb.co/NYBFLPc/instructor-4-1.jpg" alt="" />
                                <div className="overlay">
                                    <div className="icon flex w-9/12 mx-auto justify-center items-center gap-5 z-50 px-4 py-1">
                                        <Link>
                                            <FaFacebookF className="text-white font-bold text-2xl"></FaFacebookF>
                                        </Link>
                                        <Link>
                                            <FaLinkedinIn  className="text-white font-bold text-2xl"></FaLinkedinIn>
                                        </Link>
                                        <Link>
                                            <FaTwitter  className="text-white font-bold text-2xl"></FaTwitter>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Mickel Zaman</h4>
                                <p>Web & Programming</p>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="box">
                            <div className="box_image">
                                <img src="https://i.ibb.co/dBfdv7X/instructor-1-1.jpg" alt="" />
                                <div className="overlay">
                                    <div className="icon flex w-9/12 mx-auto justify-center items-center gap-5 z-50 px-4 py-1">
                                        <Link>
                                            <FaFacebookF className="text-white font-bold text-2xl"></FaFacebookF>
                                        </Link>
                                        <Link>
                                            <FaLinkedinIn  className="text-white font-bold text-2xl"></FaLinkedinIn>
                                        </Link>
                                        <Link>
                                            <FaTwitter  className="text-white font-bold text-2xl"></FaTwitter>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Paul Croves</h4>
                                <p>Computer Science Instructor</p>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="box">
                            <div className="box_image">
                                <img src="https://i.ibb.co/vVWQ0bf/team-4.jpg" alt="" />
                                <div className="overlay">
                                    <div className="icon flex w-9/12 mx-auto justify-center items-center gap-5 z-50 px-4 py-1">
                                        <Link>
                                            <FaFacebookF className="text-white font-bold text-2xl"></FaFacebookF>
                                        </Link>
                                        <Link>
                                            <FaLinkedinIn  className="text-white font-bold text-2xl"></FaLinkedinIn>
                                        </Link>
                                        <Link>
                                            <FaTwitter  className="text-white font-bold text-2xl"></FaTwitter>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Ricardo Spencer</h4>
                                <p>Physical Fitness Trainer</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="box">
                            <div className="box_image">
                                <img src="https://i.ibb.co/pRtPG1R/team-3.jpg" alt="" />
                                <div className="overlay">
                                    <div className="icon flex w-9/12 mx-auto justify-center items-center gap-5 z-50 px-4 py-1">
                                        <Link>
                                            <FaFacebookF className="text-white font-bold text-2xl"></FaFacebookF>
                                        </Link>
                                        <Link>
                                            <FaLinkedinIn  className="text-white font-bold text-2xl"></FaLinkedinIn>
                                        </Link>
                                        <Link>
                                            <FaTwitter  className="text-white font-bold text-2xl"></FaTwitter>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Marko Dugonji</h4>
                                <p>Sicence Instructor</p>
                            </div>
                        </div>
                    </div>
            </div>



        

            </section>

            <section className="px-12 bg-neutral text-neutral-content">
                <Footer></Footer>
            </section>
            
        </main>
    );
};

export default About;