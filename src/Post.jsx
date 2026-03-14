export default function Post({post}){
    console.log(post)
    return(
        <div className="card">
            <p>Title:{post.title}</p>
        </div>
    )
}