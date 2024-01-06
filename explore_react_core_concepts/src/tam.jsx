import { useState } from "react"

export default function Team(){
    const teamStyle = {
        border:"2px solid tomato",
        margin:"30px auto",
        padding: "10px",
        backgroundColor:"gray"

    }

    const [team, setTeam] = useState(11);

    const addHandle = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const removeHandle = () =>{
        setTeam(team -1 );
    }

    return(
        <div style={teamStyle}>
            <h2>Players: {team} </h2>
            <button onClick={addHandle}>Add</button>
            <button onClick={removeHandle}>Remove</button>
        </div>
    )
}