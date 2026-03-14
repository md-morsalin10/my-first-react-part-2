export default function Friend({friend}){
    // console.log(friend)
    const {name, email} = friend
    return(
        <div className="card">
            <h2>Name:{name}</h2>
            <p>Email: {email}</p>
        </div>
    )
}