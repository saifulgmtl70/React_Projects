import PropTypes from 'prop-types'
import Feature from '../feature/feature';
const PriceOption = ({option}) => {

    const {name, price, features} = option;

    return (
        <div className='bg-rose-100 px-8 py-12 flex flex-col rounded-md text-slate-800'>
            <h2 className='mb-5'>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl font-semibold'>/mon</span>
            </h2>
            <h3 className='text-3xl mb-4 font-medium'>{name}</h3>
            <h3 className='mt-8 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </h3>
            <button className='mt-12 top-0 bottom-0 bg-rose-500 hover:bg-rose-600 px-12 py-2 w-full text-white rounded-md '>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;