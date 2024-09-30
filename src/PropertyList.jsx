import PropertyListItem from "./PropertyListItem";
import './PropertyList.css';

function PropertyList({places}){
    return(
        <div className = 'propertyItem'> 
                {places.map((p) =>(
                    <PropertyListItem key={p.id} {...p}/>
                ) 
            )}
        </div>
)}
export default PropertyList;