import './App.css'
import ShopppingList from './ShoppingList';

const data = [
  {id:1, item: 'eggs', quantity: 12, completed:false},
  {id:2, item: 'milk', quantity: 5, completed:true},
  {id:3, item: 'chicken', quantity: 3, completed:false},
  {id:4, item: 'instant noodle', quantity: 17, completed:true}
];

function App() {

  return (
    <div>
        <ShopppingList items = {data}/>
    </div>
  )
}

export default App
