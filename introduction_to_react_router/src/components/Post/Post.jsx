import { Link, useNavigate } from 'react-router-dom';
import './post.css'

// eslint-disable-next-line react/prop-types
const Post = ({post}) => {

    // eslint-disable-next-line react/prop-types
    const {id, title, body} = post

    const navigate = useNavigate();

    const handleShowDetails = () =>{
        navigate(`/posts/${id}`);
    }
    

    return (
        <div className="posts">
            <h4> {id} </h4>
            <h3> {title} </h3>
            <p> {body} </p>
            <Link to={`/posts/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Click to Show details</button>
        </div>
    );
};

export default Post;