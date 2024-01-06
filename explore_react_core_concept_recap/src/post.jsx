import './post.css'
export default function Post({post}){
    const{title, body, id, userId} = post;
    return(
        <div className='post'>
            <h3><u>Post Title:</u> {title} </h3>
            <p><small><u>userID: {userId} </u></small></p>
            <p><small><u>postID: {id}</u></small></p>
            <p>{body}</p>
        </div>
    )
}


// import './post.css'
// export default function Post({post}){
//     const{title, userID, postID, body} = post;
//     return(
//         <div className="posts">
//             <h2>Title: {title} </h2>
//             <h3>User Id: {userID} </h3>
//             <h3>Post ID: {post} </h3>
//             <p> {body} </p>
//         </div>
//     )
// }