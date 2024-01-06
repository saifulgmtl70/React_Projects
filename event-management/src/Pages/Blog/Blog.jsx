
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaUserTie, FaRegCalendarAlt, FaTags, FaSearch } from 'react-icons/fa';


const Blog = () => {

   const blogDetails = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);
   const detailsBlog = blogDetails.find(detailsBlog => detailsBlog.id === idInt)

    return (
        <main>
            <Header></Header>

            <section className="">
                <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/SBctgMQ/pngtree-education-training-cartoon-illustrator-style-image-20669.jpg)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5">Blog</h1>
                            <p className="text-xl"><Link className="font-bold text-green-600" to="/">Home</Link> / Blog</p>
                        </div>
                    </div>
                </div>

            </section>


            <section className="px-14 py-16">
                <div className="grid  grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
                    <div className="h-auto rounded-lg mx-4 lg:col-span-2">
                        <div>
                            <img src={detailsBlog.images.first_img} className=" w-auto lg:w-10/12 h-auto lg:h-96 rounded-md" alt="" />
                        </div>
                        <div className="flex items-center gap-10  my-5">
                            <p className="flex items-center gap-2 text-slate-500"> <FaUserTie className=" text-rose-500 font-bold"></FaUserTie> {detailsBlog.authorName}</p>
                            <p className="flex items-center gap-2 text-slate-500"> <FaRegCalendarAlt className=" text-rose-500 font-bold"></FaRegCalendarAlt> {detailsBlog.date}</p>
                            <p className="flex items-center gap-2 text-slate-500"> <FaTags className=" text-rose-500 font-bold"></FaTags> {detailsBlog.categoryName}</p>
                        </div>
                        <h2 className="text-3xl text-cyan-950 font-bold mb-4"
                        >{detailsBlog.blogName}</h2>
                        <p className=" leading-relaxed">{detailsBlog.blogPost}</p>
                    </div>


                    <div className="h-auto rounded-lg bg-base-100  py-6 ">
                        <div className="bg-base-100 w-full px-8 py-10 rounded-md shadow-xl mb-8">
                            <div className="flex items-center">
                                <input type="text" placeholder="Search..." className="px-4 py-3 w-full rounded-l-md border border-gray-300 focus:outline-none "/>

                                <button className="px-4 py-4 rounded-r-md bg-rose-500 text-white hover:bg-rose-600 focus:outline-none "><FaSearch className=""></FaSearch></button>
                            </div>

                        </div>

                        <div className="bg-base-100  px-8 py-10 rounded-md shadow-xl mb-4">
                            <div className="tems-center">
                                <h3 className="text-xl font-bold text-blue-950 tracking-wider mb-4">Categories</h3>
                                <ul className=" space-y-4">
                                    <li className=" text-cyan-900 font-medium text-lg hover:text-rose-600"> <span className="mr-3 text-rose-500 font-bold">&gt;</span> Business</li>
                                    <li className=" text-cyan-900 font-medium text-lg  hover:text-rose-600"> <span className="mr-3 text-rose-500 font-bold">&gt;</span> Courses</li>
                                    <li className=" text-cyan-900 font-medium text-lg  hover:text-rose-600"> <span className="mr-3 text-rose-500 font-bold">&gt;</span> Education</li>
                                    <li className=" text-cyan-900 font-medium text-lg  hover:text-rose-600"> <span className="mr-3 text-rose-500 font-bold">&gt;</span> Graphics Design</li>
                                    <li className=" text-cyan-900 font-medium text-lg  hover:text-rose-600"> <span className="mr-3 text-rose-500 font-bold">&gt;</span> Programming</li>
                                    <li className=" text-cyan-900 font-medium text-lg  hover:text-rose-600"> <span className="mr-3 text-rose-500 font-bold">&gt;</span> Web Design</li>
                                </ul> 
                            </div>

                        </div>

                    </div>
                </div>


                {/* <div className="grid grid-cols-1 lg:grid-cols-3">

                </div> */}
            </section>



  
            

            




            <section className="px-12 bg-neutral text-neutral-content">
                <Footer></Footer>
            </section>
            
        </main>
    );
};

export default Blog;