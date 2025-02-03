import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import 'antd/dist/reset.css';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  return (
    <BrowserRouter>
    <Navbar title="XStore" />
    <div className="container my-3">
      <Link className="btn btn-warning" to="/cart"><i class="bi bi-cart4"></i>Cart ({cart.length})</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
