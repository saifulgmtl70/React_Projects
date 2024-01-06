import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({user}) => {

    // eslint-disable-next-line react/prop-types
    const{id, name, email, phone} = user;

    const userStyle = {
        border: "2px solid tomato",
        padding: '20px 50px',
        borderRadius: '5px'
    }


    return (
        <div style={userStyle}>
            <h2> {name} </h2>
            <h2> {email} </h2>
            <h3> {phone} </h3>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;