import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {


   

    const links = <>
        {/* <li className="me-3"><NavLink className="bg-slate-300 text-rose-950" to="">Home</NavLink></li> */}
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/" className="text-lg font-medium hover:bg-transparent">Home</NavLink></li>
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/donations" className="text-lg font-medium hover:bg-transparent">Donation</NavLink></li>
        <li className="me-3 mb-4 lg:mb-0"><NavLink to="/statistics" className="text-lg font-medium hover:bg-transparent">Statistics</NavLink></li>

    </>

    return (
        

        <header className=" top-0 z-50 sticky w-screen lg:w-auto bg-slate-100 shadow-lg">
            <div className="navbar px-3 lg:px-12 ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 px-3 text-start rounded-md w-96">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn bg-transparent hover:bg-transparent font-bold text-2xl border-none  normal-case text-red-700">
                        <img src="https://i.ibb.co/XLqMBPR/Logo.png" className="h-12 w-auto" alt="" />
                    </NavLink>
                </div>



                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </header>

    );
};

export default Header;