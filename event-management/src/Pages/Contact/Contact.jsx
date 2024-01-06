import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaEnvelope, FaPhoneVolume, FaLocationArrow } from 'react-icons/fa';



const Contact = () => {






    return (
        <main>
            <Header></Header>
            <section className="">
                <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/SBctgMQ/pngtree-education-training-cartoon-illustrator-style-image-20669.jpg)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5">Contact</h1>
                            <p className="text-xl"><Link className="font-bold text-green-600" to="/">Home</Link> / Contact</p>

                            

                        </div>
                    </div>
                </div>

            </section>

            <section className="px-14 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                    <div className="mt-3 lg:mt-20">
                        <h2 className="text-5xl mb-4 font-bold text-blue-950">Wanna Say Something?</h2>
                        <p className="text-slate-600 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>

                        <div className="flex justify-start  gap-4 mb-7">
                            <div>
                                <span >
                                    <FaEnvelope className="mt-2 text-3xl font-extrabold text-rose-600"></FaEnvelope>
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-950 mb-2">Email Address:</h3>
                                <span className="text-slate-600">azadcoxgmt@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex justify-start  gap-4 mb-7">
                            <div>
                                <span >
                                    <FaPhoneVolume className="mt-2 text-3xl font-extrabold text-rose-600"></FaPhoneVolume>
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-950 mb-2">Phone Number :</h3>
                                <span className="text-slate-600">+8801848396170</span>
                            </div>
                        </div>

                        <div className="flex justify-start  gap-4 mb-7">
                            <div>
                                <span >
                                    <FaLocationArrow className="mt-2 text-3xl font-extrabold text-rose-600"></FaLocationArrow>
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-950 mb-2">Our Location</h3>
                                <span className="text-slate-600">472 Sheikh Mujeeb Road, Agrabad, Chattogram</span>
                            </div>
                        </div>

                    </div>


                    <div className="">
                        <div className="mx-auto max-w-lg">
                            <form action="" className="mb-0 mt-6 space-y-8 bg-slate-50 rounded-lg p-4 shadow-2xl px-10 py-14">


                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>

                                    <div className="relative">
                                        <input type="text" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your name here" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <div className="relative">
                                        <input type="email" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your email here" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>

                                    <div className="relative">
                                        <input type="email" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your subject here" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="Subject" className="sr-only">Message</label>

                                    
                                    <textarea name="" className="w-full h-44 mb-5 rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm" placeholder="Enter your message here"></textarea>
                                </div>

                                <button type="submit" className="block w-full mt-12 rounded-lg bg-rose-600 px-5 py-3 text-lg font-medium text-white">Send Message</button>

                                
                            </form>
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

export default Contact;