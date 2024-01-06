export default function Players({name}){
    return (
        <ol style={{textAlign:"start", listStyle:"none"}}>
            <li>Player name is: {name} </li>
        </ol>
    )
}