import { use } from "react"

export default function Friends({friendsPromise}){

    const Friend = use(friendsPromise)
    return(
        <div className="card">
            <h3>Friends:{Friend.length}</h3>
        </div>
    )
}