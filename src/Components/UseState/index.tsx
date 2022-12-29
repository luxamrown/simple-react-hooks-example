import { useState } from "react"
import './index.css'
import '../../App.css'

const UseStatePage = () =>{
    const [count, setCount] = useState(0)
    const [range, setRange] = useState(1)
    const [allowNegative, setAllowNegative] = useState(true)

    const handleCheckBox = () =>{
        var checkBox = document?.getElementById("neg") as HTMLInputElement | null
        if (checkBox?.checked){
            setAllowNegative(true)
        } else {
            setAllowNegative(false)
            if (count < 0){
                setCount(0)
            }
        }
    }

    const handleIncrementCount = () =>{
        setCount(count + range)
    }

    const handleDecrementCount = () =>{
        if (!allowNegative){
            if (count - range < 0 || count === 0) {
                setCount(0)
                return null
            }
        } 
        setCount(count - range)
        
    }

    return(
        <div>
            <div>
                <h1>Counter App</h1>
                <h3>Range : {range}</h3>
                <div style={{"display":"flex", "justifyContent":"center"}}>
                    <div style={{"margin":"10px 0px", "display":"flex", "justifyContent":"center"}}>
                        <p>Change range</p>
                        <input value={range} min={0} onChange={(e) => setRange(+e.target.value)} style={{"maxWidth":"50px", "margin":"20px 10px"}} type="number" />
                    </div>
                    <div style={{ "display":"flex", "justifyContent":"center"}}>
                        <input type="checkbox" name="neg" id="neg" value={"true"} checked={allowNegative} onClick={handleCheckBox}/>
                        <label htmlFor="neg" style={{"margin":"30px 0px"}}>Allow Negative Count?</label>
                    </div>
                </div>
                <h2>Count: {count}</h2>
            </div>
            <div>
                <button className="home-button" onClick={handleIncrementCount}>+</button>
                <button className="home-button" onClick={handleDecrementCount}>-</button>
            </div>
        </div>
    )
}

export default UseStatePage