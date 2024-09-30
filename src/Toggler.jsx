import { useState } from "react";
import './Toggler.css'

export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true);
    const toggleIHappy = () => setIsHappy(!isHappy);
    return (
        <p className="Toggler" onClick={toggleIHappy}>
            {isHappy ? "😊" : "☹️"}
        </p>
    )
}