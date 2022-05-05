import './App.css';
import imageOne from './shopping.jpeg';
import imageTwo from './man.jpeg';
import { GroceryList } from './GroceryList';

	function App() {
	return (
		<div className='Block_Grocery'>
			<div className='Container'>
				<img src={ imageOne } alt="shopping"/>
				<h1>Grocery List</h1>
				<GroceryList/>
				<img src={ imageTwo } alt="shoppingman"/>
			</div>
		</div>
	);
	}

export default App;
