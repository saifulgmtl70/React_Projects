import { useLoaderData } from "react-router-dom";


const Userdetails = () => {

    const user = useLoaderData();
    const {name, email, phone} = user;

    // console.log(name, email, phone);

    return (
        <div style={{borderRadius:'5px', border: '1px solid tomato', padding: '20px', width: '450px', textAlign:'center'}}>
            <h2>Details about user </h2>
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
            <h3>Phone: {phone} </h3>
        </div>
    );
};

export default Userdetails;