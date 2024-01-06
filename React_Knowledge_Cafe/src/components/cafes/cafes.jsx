// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cafe from '../cafe/cafe';

Cafe

const Cafes = () => {

    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        fetch("/public/cafe.json")
        .then(res => res.json())
        .then(data => setCafes(data))
    }, [])

    return (
        <div className='px-10 py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    cafes.map(cafe => <Cafe key={cafe.id} cafe={cafe}></Cafe>)
                }

            </div>
        </div>
    );
};

export default Cafes;