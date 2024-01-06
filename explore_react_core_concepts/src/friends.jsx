import { useEffect, useState } from "react"
import Friend from "./single_firends"

export default function Friends(){
    const [firends, setFriends] = useState([])


    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])

    return(
        <div className="box">
            <h3>Friends: {firends.length} </h3>
            {
                firends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}