import { NavLink } from "react-router-dom";


const Header = () => {


   

    const links = <>
        {/* <li className="me-3"><NavLink className="bg-slate-300 text-rose-950" to="">Home</NavLink></li> */}
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/">Home</NavLink></li>
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/jobs">Jobs</NavLink></li>
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        

        <header className=" top-0 z-50 sticky shadow-md">
            <div className="navbar px-3 lg:px-10 bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 px-3 text-start rounded-md w-96">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn bg-transparent hover:bg-transparent font-bold text-2xl border-none  normal-case text-red-700">CareearHub</NavLink>
                </div>



                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>



                <div className="navbar-end">
                    <a className="btn bg-rose-500 hover:bg-rose-600 text-white">Apply Now</a>
                </div>
            </div>
        </header>

    );
};

export default Header;