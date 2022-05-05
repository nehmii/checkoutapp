import Products from './Components/Products';
import data from './Rservices/Productsservice'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './Components/Cart';
import { CartProvider } from './provider/CartProvider';
import { Checkout } from './pages/Checkout';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route exact path='/' element={<Products products={data.products}/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
