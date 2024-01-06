
import './Banner.css'

// eslint-disable-next-line react/prop-types
const Banner = () => {


    


    return (
        <section className="px-14 py-14 bg_banner mx-auto">

            <div className='text-center'>
                <h2 className='text-slate-900 text-2xl lg:text-5xl font-bold'>I Grow By Helping People In Need</h2>
                
                
                <form>   
                    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative mt-12 w-full lg:w-5/12 mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            
                        </div>

                        <input type="search" id="default-search" className="block w-full h-14 px-6  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-0" placeholder="Search here" required />

                        <button  type="submit" className="text-white bg-rose-500 rounded-r-md absolute right-0 bottom-0  font-medium text-lg h-14 px-2 lg:px-10">Search</button>
                    </div>
                </form>


            </div>
        </section>
    );
};

export default Banner;