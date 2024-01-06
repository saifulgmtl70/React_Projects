import React from 'react';
import './watch.css'
// const Watch = ({watch}) => {
//     const {name, price} =  watch;
//     return (
//         <div>
//             <h2>Watch Name: {name} </h2>
//             <p>Watch Price: {price} </p>
//         </div>
//     );
// };

const Watch = ({watch}) =>{
    const{id, name, price, image} = watch;

    return(
        <div className='watches' style={{textAlign:"left"}}>
            <span>Watch ID: {id} </span>
            <h2>Watch Name: {name} </h2>
            <p>Watch Price: {price} </p>
            <img src={image} alt="" />
        </div>
    )
}

export default Watch;