import Counter from './Counter'
import Morsalin from './Morsalin'
import './App.css'

function App() {

 function handleClick (){
  alert("clicked")
 }

 const handle2 = ()=>{
  alert("clicked 2")
 }

  return (
    <>
      <h1>Vite + React</h1>
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
