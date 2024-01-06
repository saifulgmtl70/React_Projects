import {NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>

                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>

                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;