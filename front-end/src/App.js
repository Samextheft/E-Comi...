
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import ShopContextProvider from './Context/ShopContext';
import CartContextProvider from './Context/CartContext';  


function App() {
  return (
    <CartContextProvider>
      <ShopContextProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar/>      
            <Routes>
              <Route path='/' element = {<Shop/>}/>
              <Route path="/category/:category" element = {<ShopCategory/>}/>
              {/* <Route path='/mens' element = {<ShopCategory category="mens"/>}/>
              <Route path='/women' element = {<ShopCategory category="women"/>}/>
              <Route path='/kids' element = {<ShopCategory category="kids"/>}/> */}

              
              <Route path='/product' element = {<Product/>}> 
                <Route path='/productId' element = {<Product/>}/>
              </Route>
              <Route path='/cart' element = {<Cart/>}/>
              <Route path='/login' element = {<LoginSignup/>}/>
            </Routes>
          </BrowserRouter>

        </div>
      </ShopContextProvider>
    </CartContextProvider>
    
  );
}

export default App;
