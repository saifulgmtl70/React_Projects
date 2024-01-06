import { useState } from "react";

const Country = ({country}) => {
    const{name, flags, population, area,cca3} = country;


    const[visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

    // const passWithParams = () =>{
    //     handleVisitedBtn(country);
    // }
    
    return (
        <div style={{border:"1px solid tomato", borderRadius:"6px", padding:"30px 50px", textAlign:"center", margin:"15px auto"}} className={`country ${visited ? 'visited' : 'non_visited'}`}>
            <h3> {name.common} </h3>
            <img src={flags.png} alt=""  style={{width:"300px", height:"150px", borderRadius:"4px"}}/>
            <p> {population} </p>
            <p> {area} </p>
            <p>Code: <strong> {cca3} </strong> </p>
            {/* <button className="visitedBtn" onClick={passWithParams}>Mark Visited</button> */}
            <button className="visitedBtn" onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            
            <br />
            {visited ? 'I have visited this country.' : 'I want to visit another one'}
        </div> 
    );
};

export default Country;