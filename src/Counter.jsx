import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    const handleBtn= () =>{
        const newCount = count+1;
        setCount(newCount)
    }
    const styleCount={
        border:'2px solid green',
        borderRadius:'15px'
    }
    return(
        <div style={styleCount}>
            <h3>Count: {count}</h3>
            <button onClick={handleBtn}>Add</button>
        </div>
    )
}