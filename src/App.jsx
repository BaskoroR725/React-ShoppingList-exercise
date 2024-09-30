import './App.css'
import ShopppingList from './ShoppingList';
import PropertyList from './PropertyList';


const data = [
  {id:1, item: 'eggs', quantity: 12, completed:false},
  {id:2, item: 'milk', quantity: 5, completed:true},
  {id:3, item: 'chicken', quantity: 3, completed:false},
  {id:4, item: 'instant noodle', quantity: 17, completed:true}
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
    <div>
        <ShopppingList items = {data}/>
        <PropertyList places= {properties}/>
    </div>
  )
}

export default App
