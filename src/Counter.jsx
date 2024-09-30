import { useState } from "react";

export default function Counter(){
    const [num, setNum] = useState(1);
    const changeNum = () =>{
        setNum(num + 1);
    }; 
    return (
        <div>
            <p>Count is : {num}</p>
            <button onClick={changeNum}>Increment Number</button>
        </div>
    )
}