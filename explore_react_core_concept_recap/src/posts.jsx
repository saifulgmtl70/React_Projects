import { useEffect } from "react"
import { useState } from "react"
import Post from "./post"

export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    } , [])
    return(
        <div className="posts">
            {/* <h3>Posts: {posts.length} </h3> */}
            {
                posts.map(post => <Post post={post}></Post>)
                // posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}




/*

// 1. Create a state to store the data
// 2. Create useEffect  with no dependencies
// 3. use Fetch to load data
// 4. 
*/