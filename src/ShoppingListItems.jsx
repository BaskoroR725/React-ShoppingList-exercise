function ShoppingListItems({ item, quantity, completed }){
const styles = {
    color: completed ? 'slategrey' : 'red', 
    textDecoration: completed ? 'line-through': 'none'};
return (
    <li style={styles}>
        {item} - {quantity}
    </li>
)
}

export default ShoppingListItems;
{/* <li 
key={i.id} 
style={{ 
        color: i.completed ? 'slategrey' : 'red',
        textDecoration: i.completed ? 'line-through': 'none'
    }}
>
    {i.item} - {i.quantity}
</li> */}