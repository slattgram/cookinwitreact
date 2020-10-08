import React,{useState ,useContext} from "react"
import {MyContext} from "./App";

export default Counter

function Counter(){
    const [count, setCount] = useState(0)
    let style = useContext(MyContext)
    return (
        <>
            <div className="line">
                <button style={style} onClick={()=>setCount(prevState => count+1)}>+</button>
                <div>{count}</div>
                <button style={style} onClick={()=>setCount(prevState => count-1)}>-</button>
            </div>
        </>
    )
}