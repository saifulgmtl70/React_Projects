import PropTypes from 'prop-types';

import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className='flex justify-start items-center gap-2 mb-3'>
            <AiFillCheckCircle className='text-green-700 text-2xl'></AiFillCheckCircle> <p>{feature} </p>
        </div>
    );
};


Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;