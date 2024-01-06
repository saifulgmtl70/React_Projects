import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const {id, title, body} = post;

    const navigate = useNavigate();
     const handleGoBack = () =>{
        navigate(-1);234
        
     }
    
    return (
        <div style={{border: '1px solid tomato', padding: '20px', borderRadius:"4px", width: '450px', textAlign:'center'}}>
            <h2>Post details About</h2>
            <span> {id} </span>
            <p> {title} </p>
            <p> {body} </p>

            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;