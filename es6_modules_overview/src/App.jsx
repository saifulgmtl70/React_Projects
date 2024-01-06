import { useEffect, useState } from 'react';
import './App.css'



import Watch from './compponents/watch/watch';

// const watches = 
// [
//     {
//       "id": 1,
//       "name": "Rolex Submariner",
//       "price": 10000
//     },
//     {
//       "id": 2,
//       "name": "Omega Speedmaster",
//       "price": 8500
//     },
//     {
//       "id": 3,
//       "name": "Tag Heuer Carrera",
//       "price": 7500
//     },
//     {
//       "id": 4,
//       "name": "Seiko Prospex",
//       "price": 600
//     },
//     {
//       "id": 5,
//       "name": "Citizen Eco-Drive",
//       "price": 250
//     },
//     {
//       "id": 6,
//       "name": "Fossil Grant",
//       "price": 120
//     },
//     {
//       "id": 7,
//       "name": "Casio G-Shock",
//       "price": 100
//     },
//     {
//       "id": 8,
//       "name": "Bulova Precisionist",
//       "price": 300
//     },
//     {
//       "id": 9,
//       "name": "Timex Weekender",
//       "price": 50
//     },
//     {
//       "id": 10,
//       "name": "Swatch Originals",
//       "price": 80
//     }
//   ]



  

const App = () => {

    const [watches, setWatches] = useState([])

    // useEffect(() => {
    //     fetch('../public/watches.json')
    //     .then(res => res.json())
    //     .then(data => setWatches(data))
    // }, [])
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/azadgmtl/watches_data/main/watch.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, [])

    return (
        <div>
            <h1>Es6 Module Overview</h1>
            <div className='watches_Container'>
                
                {
                    watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
                }
            </div>
        </div>
    );
};

export default App;