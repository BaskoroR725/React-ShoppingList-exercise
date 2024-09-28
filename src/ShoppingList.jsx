import ShoppingListItems from "./ShoppingListItems";
function ShopppingList ({items}){
return (
    <ul>
        {items.map((i) => (
            <ShoppingListItems key={i.id} {...i} />   
        ))}
    </ul>
)}

export default ShopppingList;

{/* <ul>
{items.map((i) => (
    <ShoppingListItems 
        key={i.id}    
        item={i.item} 
        quantity={i.quantity} 
        completed={i.completed} 
    />   
))}
</ul>
)} */}

