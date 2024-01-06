export default function Friend(hfriend){
    const{name, email} = hfriend;
    // console.log(hfriend);
    return(
        <div>
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
        </div>
    )
}