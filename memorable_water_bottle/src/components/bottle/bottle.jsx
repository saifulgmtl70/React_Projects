import './bottle.css'

// eslint-disable-next-line react/prop-types
const Bottle = ({bottle, handleAddToCart}) => {
    // eslint-disable-next-line react/prop-types
    const  {name, price, img} = bottle;
    return (
        <div className="bottles">
            <h3> {name} </h3>
            <p> {price}TK </p>
            <img src={img} alt="" />
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

export default Bottle;