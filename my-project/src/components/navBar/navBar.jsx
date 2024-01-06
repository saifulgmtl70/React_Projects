// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Link from '../link/link';

import { AiOutlineAlignLeft, AiOutlineClose} from 'react-icons/ai';


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Not Found', path: '/404' }
      ];
      



    return (
        <nav className='p-4 h-auto lg:px-12 lg:py-3 bg-rose-300'>
            <div className='text-2xl text-white lg:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineAlignLeft ></AiOutlineAlignLeft>
                }
                
            </div>
           
            <ul className={`lg:flex gap-12 absolute lg:static bg-rose-300 bg-none w-10/12 duration-1000 p-3 mt-0 

                ${open ? "top-14" : "-top-96"}

             shadow-xl lg:shadow-transparent `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;