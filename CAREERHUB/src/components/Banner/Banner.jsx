
const Banner = () => {
    return (
        <section className="bg-base-200">
            <div className="mb-10 px-12 y-10">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div>
                        <h2 className="text-5xl text-slate-800 font-semibold leading-snug">One Step Closer To Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Dream Job</span> </h2>
                        <p className="text-lg mt-4 text-slate-700">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded text-white mt-5'>Get Started</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/TWpx09N/user.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;