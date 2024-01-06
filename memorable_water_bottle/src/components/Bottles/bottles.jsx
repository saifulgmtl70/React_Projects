import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";

import './bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/public/bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handleAddToCart = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
    }

    return (
        <div>
            <h2>Bottles available Here: {bottles.length} </h2>
            <h3>Bottles added in cart: {cart.length} </h3>
            <div className="bottles_container">
            
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;
