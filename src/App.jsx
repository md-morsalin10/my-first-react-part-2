import Counter from './Counter'
import Morsalin from './Morsalin'
import Users from './Users'
import Posts from './Posts'
import Friends from './Friends'
import './App.css'
import { Suspense } from 'react'


const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

  const fetchFriends = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
  }

   const fetchComment = async () =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      return res.json()
   }
function App() {
  const friendsPromise = fetchFriends();
  const postCPromise = fetchComment()

  function handleClick() {
    alert("clicked")
  }

  const handle2 = () => {
    alert("clicked 2")
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>Scrolling.....</p>}>
          <Posts postCPromise={postCPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>

      <Suspense fallback={<h2>Coming...</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>



      <Morsalin></Morsalin>
      <Counter></Counter>

      <button onClick={handleClick}>click me</button>
       <button onClick={handle2}>Click me2</button>
       <br />
       <button onClick={()=> alert("clicked 3")}> click me 3</button>

    </>
  )
}

export default App
