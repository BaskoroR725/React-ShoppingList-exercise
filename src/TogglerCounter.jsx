import { useState } from "react";
import './Toggler.css'

export default function TogglerCounter(){
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 2);
    return (
        <>
            <p className="Toggler" onClick={toggleIHappy}>
                {isHappy ? "😊" : "☹️"}
            </p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </>
    )
}