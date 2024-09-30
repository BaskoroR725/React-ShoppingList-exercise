function PropertyListItem({name, rating, price}){
    const warna = {
        color:'blacksmoke', 
        listStyle: 'none',
        border: 'dashed'
    };
    return (
        <div>
            <li className='propertyItem' style={warna}>
                <h2>{name}</h2>
                <h3> $ {price} a night</h3> 
                <h4>{rating} ⭐</h4> 
            </li>
        </div>
    )
}

export default PropertyListItem;

/* const warna = {
    color: blue
};

<li style={warna}>
{name} - {rating} ⭐ - $ {price}
</li> */
