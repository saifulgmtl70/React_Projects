// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './components/navBar/navBar';
import PriceOptions from './components/price_options/price_options';
// import { LineChart } from 'recharts';
import LineChart from './components/LineChart/LineChart';
// import DaisyNav from './components/nav/nav';


const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <PriceOptions></PriceOptions>
            <LineChart></LineChart>
        </div>
    );
};

export default App;