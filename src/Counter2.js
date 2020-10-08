import React,{useState} from "react"

export default Counter2

function Counter2(){
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="line">
                <button onClick={()=>setCount(count+1)}>+</button>
                <div>{count}</div>
                <button onClick={()=>setCount(count-1)}>-</button>
            </div>
        </>
    )
}