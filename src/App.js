import Products from './Components/Products';
import data from './Rservices/Productsservice'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './Components/Cart';


function App() {
  const {products} = data;

  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Route exact path='/'>
        <Products products={products}/> 
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
