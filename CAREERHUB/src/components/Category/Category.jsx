

const Category = () => {
    return (
        <section className="px-12">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-medium mb-4">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-slate-200 px-10 py-12 rounded text-center lg:text-start">
                    <img src="https://i.ibb.co/G2MtwPw/accounts.png" className="bg-slate-100 px-6 py-5 rounded mb-6 mx-auto lg:mx-0" alt="" />
                    <h2 className="text-xl text-slate-700 font-medium mb-2">Account & Finance</h2>
                    <p className="text-slate-500">300 Jobs Available</p>
                </div>

                <div className="bg-slate-200 px-10 py-12 rounded text-center lg:text-start">
                    <img src="https://i.ibb.co/FDy26mm/creative.png" className=" bg-slate-100 px-6 py-5 rounded mb-6 mx-auto lg:mx-0" alt="" />
                    <h2 className="text-xl text-slate-700 font-medium mb-2">Creative Design</h2>
                    <p className="text-slate-500">100+ Jobs Available</p>
                </div>

                <div className="bg-slate-200 px-10 py-12 rounded text-center lg:text-start">
                    <img src="https://i.ibb.co/sH6PPsD/marketing.png" className="bg-slate-100 px-6 py-5 rounded mb-6 mx-auto lg:mx-0" alt="" />
                    <h2 className="text-xl text-slate-700 font-medium mb-2">Marketing & Sales</h2>
                    <p className="text-slate-500">150 Jobs Available</p>
                </div>

                <div className="bg-slate-200 px-10 py-12 rounded text-center lg:text-start">
                    <img src="https://i.ibb.co/ZgwnyR1/chip.png" className="bg-slate-100 px-6 py-5 rounded mb-6 mx-auto lg:mx-0" alt="" />
                    <h2 className="text-xl text-slate-700 font-medium mb-2">Engineering Job</h2>
                    <p className="text-slate-500">224 Jobs Available</p>
                </div>

            </div>


        </section>

        
    );
};

export default Category;