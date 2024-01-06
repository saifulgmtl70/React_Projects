import PropTypes from 'prop-types';


const Link = ({route}) => {

    return (
        <li className=' hover:bg-rose-600 px-3 py-1 rounded-sm duration-700 font-bold mb-1 text-white'>
             <a href={`route.path`}>{route.name}</a>  
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;