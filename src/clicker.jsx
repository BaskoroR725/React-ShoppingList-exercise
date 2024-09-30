function handleClick(){
    alert("clicked the button");
}

function handleNotClick(){
    alert("do not click the button");
}

function handleHover(){
    console.log('hovered');
}

export default function Clicker(){
    return(
        <div>
            <p onMouseOver={handleHover}>Hovered Text</p>
            <button onClick={handleClick}>click</button>
            <button onClick={handleNotClick}>do not click</button>
        </div>
    )
}