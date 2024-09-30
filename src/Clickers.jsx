export default function Clickers({ buttonText, message }){
    const handleClicks = () =>{
        alert(message);
    };
    return <button onClick={handleClicks}>{buttonText}</button>
}