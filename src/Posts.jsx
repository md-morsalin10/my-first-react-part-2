import { use } from "react"
import Post from './Post'

export default function Posts({postCPromise}){
    const posts = use(postCPromise)
    console.log(posts);
    
    return(
        <div className="card">
            <h2>All post are here: {posts.length}</h2>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}