import { useState } from "react"

export default function Counter(){
    const [count, saetCount] = useState(0);
    // console.log(count);

    const handleAdd = () =>{
        const newContent = count + 1;
        saetCount(newContent);
    }

    const handleReduce = () =>{
        const newContent = count - 1;
        saetCount(newContent);
    }

    return(
        <div style={{border: "2px solid tomato", padding:"30px 50px", borderRadius:"5px"}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd} style={{backgroundColor:"tomato", color:"#fff", border:"0"}}>Add</button>

            <button onClick={handleReduce} style={{backgroundColor:"tomato", color:"#fff", marginLeft:"5px", border:"0"}}>Reduce</button>
            
        </div>
    )
}