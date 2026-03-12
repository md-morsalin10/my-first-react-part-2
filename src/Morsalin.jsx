import { useState } from "react"

export default function Morsalin(){
    const [runs, setRuns] = useState(0);
    const [six, setSix] = useState(0);

    const handleOne = ()=>{
        const updatedRuns = runs+1;
        setRuns(updatedRuns)
    }

    const handleFour =()=>{
        const updatedRuns = runs+4;
        setRuns(updatedRuns)
    }
      const handleSix =()=>{
        const updatedRuns = runs+6;
        const updateNumberOfSix = six+1;
        setSix(updateNumberOfSix);
        setRuns(updatedRuns);
    }
    const styleM={
        border:'2px solid red',
        margin: "10px",
        borderRadius: '10px',
        padding: '10px'
    }
    return(
        <div style={styleM}>
            <h4>Batter Morslin:</h4>
            <p>Total six: {six}</p>
            {
                runs>50 && <p>You Scored: 50+ Runs</p>
            }
            <h1>Runs: {runs}</h1>

            <button onClick={handleOne}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}