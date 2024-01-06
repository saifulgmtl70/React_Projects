import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { SlBadge } from 'react-icons/sl';
import { TbLockAccess } from 'react-icons/tb';
import { FaUserTie, FaBlenderPhone } from 'react-icons/fa';

// import { Link, useLoaderData } from "react-router-dom";
import CourseCategory from "../CourseCategory/CourseCategory";
import { useEffect, useState } from "react";
import SeeBlogs from "../Blog/SeeBlogs";
// import { Link } from "react-router-dom";
// import { useState } from "react";


const Home = () => {

    // const EducationsCourse = useLoaderData();

   


    // const handleSeMore = () => {
    //     setDataLength(EducationsCourse.length);
    //     setSeemore(true);
    // };

    const [educationCourses, setEducationCourses] = useState([]);
    const [seeMore, setSeemore] = useState(null);
    const [dataLength, setDataLength] = useState(4);

    const [blogsPosts, setBlogPosts] = useState([])

    const handleSeMore = () => {
        setDataLength(educationCourses.length);
        setSeemore(true);
    };

    useEffect(() =>{
        fetch('eduCategory.json')
        .then(res => res.json())
        .then(data => setEducationCourses(data))
    }, [])

    useEffect(() =>{
        fetch('blog.json')
        .then(result => result.json())
        .then(resData => setBlogPosts(resData))
    },[])


    return (
      

        <main className="">
            {/* Header Section Started */}
            <Header></Header>

            {/* Home Section Started */}

            {/* <section className="px-7 py-12 lg:px-14">
                <Swiper spaceBetween={50} slidesPerView={1}>
                    <SwiperSlide>
                        <div className="image" >
                            <StaticImage src="https://i.ibb.co/PMDw61j/firmbee-com-gcs-NOs-PEXfs-unsplash.jpg"></StaticImage>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    
                </Swiper>
            </section> */}


            {/* Home Slider */}

            <section >
                <div className="carousel w-full ">

                    <div id="slide1" className="carousel-item relative w-full">

                        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PMDw61j/firmbee-com-gcs-NOs-PEXfs-unsplash.jpg)'}}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg ">
                                    <h1 className="mb-5 text-7xl font-bold">Invest in Your Education</h1>
                                    <p className="mb-5">Invest in your future by investing in your education. Our comprehensive courses are designed to equip you with the tools and expertise you need to succeed.</p>
                                    <button className="px-8 py-3 bg-rose-500 hover:bg-rose-500 text-white  font-medium rounded-md">Find Our Courses </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle hover:bg-rose-500 hover:text-white">❮</a> 
                            <a href="#slide2" className="btn btn-circle hover:bg-rose-500 hover:text-white">❯</a>
                        </div>
                    </div> 


                    <div id="slide2" className="carousel-item relative w-full">

                        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/3Ms08wv/glenn-carstens-peters-npx-XWg-Q33-ZQ-unsplash.jpg)'}}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg ">
                                    <h1 className="mb-5 text-7xl font-bold">Stay Ahead of the Curve</h1>
                                    <p className="mb-5">Stay at the forefront of your industry with our cutting-edge training programs. Our experienced instructors will help you stay ahead of the curve in today's fast-paced world.</p>
                                    <button className="px-8 py-3 bg-rose-500 hover:bg-rose-500 text-white  font-medium rounded-md"> Find Our Courses </button>
                                </div>
                            </div>
                        </div>  


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle hover:bg-rose-500 hover:text-white">❮</a> 
                            <a href="#slide3" className="btn btn-circle hover:bg-rose-500 hover:text-white">❯</a>
                        </div>
                    </div> 



                    <div id="slide3" className="carousel-item relative w-full">

                        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/sVT42Z6/shubham-sharan-Z-fq3w-BVf-MU-unsplash.jpg)'}}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-7xl font-bold">Unlock Your Potential</h1>
                                    <p className="mb-5">oin our empowering workshops and discover the skills and knowledge you need to unlock your true potential. Shape your future with our expert guidance.</p>
                                    <button className="px-8 py-3 bg-rose-500 hover:bg-rose-500 text-white  font-medium rounded-md"> Find Our Courses </button>
                                </div>
                            </div>
                        </div>  

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle hover:bg-rose-500 hover:text-white">❮</a> 
                            <a href="#slide1" className="btn btn-circle hover:bg-rose-500 hover:text-white">❯</a>
                        </div>
                    </div> 
    
                </div>
            </section>

            {/* Course Category */}
            <section className="px-7 py-10 lg:px-14">
                <div className="text-center">
                    <span className="text-lg text-red-500 ">Courses Category</span>
                    <h2 className="text-4xl text-blue-950 font-medium mt-2 mb-14">Our Popular Courses</h2>
                </div>

                <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6">

                    
                    {
                        educationCourses.slice(0, seeMore ? educationCourses.length : dataLength).map(courses => <CourseCategory key={courses.id} courses={courses}></CourseCategory>)
                    }

                </div>

                {!seeMore && educationCourses.length > 4 && (
                    <div className="text-center mt-10">
                        <button onClick={handleSeMore} className="bg-rose-600 px-5 py-3 rounded text-white">See More</button>
                    </div>
                )}


                
            </section>


            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="text-center">
                        <div className="mx-auto ">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            What say Learners About us?
                            </h2>

                            <p className="mt-6 leading-relaxed text-gray-700">
                            Here is given some review of our some of Learners. Let's see, What they say about us and our services?
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <blockquote
                            className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
                        >
                            <div>
                            <div className="flex gap-0.5 text-green-500">
                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                Yasir Ali
                                </p>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                "I've been using this education and training events website for a while now, and it's been an incredible resource for my professional development. The platform offers a wide range of courses across various fields, making it easy to find something that suits my needs. The quality of instructors and content is exceptional. The user-friendly interface and seamless registration process make it a pleasure to use. I highly recommend this website to anyone looking to enhance their skills and knowledge."
                                </p>
                            </div>
                            </div>

                            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Learner of  <span className="text-rose-500 font-medium">EduTrainX</span>
                            </footer>
                        </blockquote>

                        <blockquote
                            className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
                        >
                            <div>
                            <div className="flex gap-0.5 text-green-500">
                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                Siraj Hyder
                                </p>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                "I can't say enough about how valuable this education and training events website has been for me. The diversity of courses available is impressive, and the ability to attend both live events and access recorded content at my convenience is a game-changer. The instructors are experts in their fields, and the interactive nature of the platform enhances the learning experience. Plus, the regular updates and new course offerings keep me coming back for more. It's a top-notch resource for lifelong learners like me."
                                </p>
                            </div>
                            </div>

                            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Learner of  <span className="text-rose-500 font-medium">EduTrainX</span>
                            </footer>
                        </blockquote>

                        <blockquote
                            className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
                        >
                            <div>
                            <div className="flex gap-0.5 text-green-500">
                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>

                                <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                                </svg>
                            </div>

                            <div className="mt-4">
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                Mustofa Hakim
                                </p>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                "As someone who is constantly seeking opportunities to expand my knowledge and skills, this education and training events website has become my go-to platform. The range of topics covered is vast, and the content quality is consistently high. I appreciate the flexibility to learn at my own pace or engage in live events with experts in real-time. The website's intuitive design and excellent customer support make it a joy to use. It has truly enriched my learning journey, and I'm grateful to have discovered such a valuable resource."
                                </p>
                            </div>
                            </div>

                            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Learner of  <span className="text-rose-500 font-medium">EduTrainX</span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>



            <section className="px-7 py-12 lg:px-14 bg-base-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="text-center lg:text-start">
                        <h1 className="text-4xl text-cyan-950 font-bold mb-5">Why Choose us?</h1>
                        <p className="text-slate-500">Opt for us for an exceptional learning journey. Our platform offers diverse courses, expert instructors, flexible schedules, and an interactive community. We prioritize user-friendliness and up-to-date content, ensuring a seamless experience. Choose us to unlock cutting-edge knowledge and skills for your success.</p>
                    </div>

                    <div className="mx-auto">
                        <div className="flex flex-col lg:flex-row gap-5 mb-4">
                            <div className="mx-auto lg:mx-0">
                                <SlBadge className="text-6xl text-orange-500"></SlBadge>
                            </div>
                            <div className="text-center lg:text-start">
                                <h3 className="text-lg mb-2 text-sky-950 font-bold">Our Educational and Training Course are High Quality Based</h3>
                                <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row  gap-5 mb-4">
                            <div className="mx-auto lg:mx-0">
                                <TbLockAccess className="text-6xl text-orange-500"></TbLockAccess>
                            </div>
                            <div className="text-center lg:text-start">
                                <h3 className="text-lg mb-2 text-sky-950 font-bold">Life time Accessable Service</h3>
                                <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                            </div>
                        </div>

                    </div>


                    <div className="mx-auto">
                        <div className="flex flex-col lg:flex-row  gap-5 mb-4">
                            <div className="mx-auto lg:mx-0">
                                <FaUserTie className="text-6xl text-orange-500"></FaUserTie>
                            </div>
                            <div className="text-center lg:text-start">
                                <h3 className="text-lg mb-2 text-sky-950 font-bold">Expert Trainers and Instructors</h3>
                                <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row  gap-5 mb-4">
                            <div className="mx-auto lg:mx-0">
                                <FaBlenderPhone className="text-6xl text-orange-500"></FaBlenderPhone>
                            </div>
                            <div className="text-center lg:text-start">
                                <h3 className="text-lg mb-2 text-sky-950 font-bold">Unlimited Support</h3>
                                <p className="text-slate-500">Our website offers high-quality educational and training courses, ensuring excellence in learning and skill development.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            
            {/* Our Blog Section */}
            <section className="px-7 py-12 lg:px-14 bg-base-200">
                <div className="text-center mb-10">
                    <span className=" text-rose-600 font-medium text-lg">Blogs</span>
                    <h2 className="text-4xl font-bold text-indigo-950 mt-3">Our Latest Blogs Article</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        blogsPosts.slice(0, seeMore ? blogsPosts.length : dataLength).map(Blogs => <SeeBlogs key={Blogs.id} Blogs={Blogs}></SeeBlogs>)
                    }
                    {/* {
                        blogsPosts.map(Blogs => <SeeBlogs key={Blogs.id} Blogs={Blogs} ></SeeBlogs>)
                    } */}
                </div>

                {!seeMore && educationCourses.length > 4 && (
                    <div className="text-center mt-10">
                        <button onClick={handleSeMore} className="bg-rose-600 px-5 py-3 rounded text-white">See More</button>
                    </div>
                )}

            </section>

            
            <section className="px-12 bg-neutral text-neutral-content">
                <Footer></Footer>
            </section>


            
        </main>
    );
};

export default Home;