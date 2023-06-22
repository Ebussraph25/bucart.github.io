
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Sell from "./pages/Sell";
import Layout from './Layout'


const App = () => {
   return (
      <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home/>}/>
        <Route path="sell" element={<Sell/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="productList" element={ <ProductList /> } />
        <Route path="product" element={ <Product /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register /> } />

        <Route path="*" element={<Home/>}/>
      </Route>
      </Routes>
       

       )
   }
      
    
  

   

export default App;
