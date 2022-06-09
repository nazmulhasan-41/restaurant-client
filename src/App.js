import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

import Dash_AddMenu from './components/Dashboard/Dash_AddMenu/Dash_AddMenu';
import Dash_AddIngradient from './components/Dashboard/Dash_AddIngradient/Dash_AddIngradient';
import Dash_AddProduct from './components/Dashboard/Dash_AddProduct/Dash_AddProduct';
import ProductDetails from './components/Menu/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} >
          <Route path="addProduct" element={<Dash_AddProduct />} />
          <Route path="addIngradient" element={<Dash_AddIngradient />} />
          <Route path="addMenu" element={<Dash_AddMenu />} />

        </Route>
        <Route exact path="/productDetails/:productId" element={<ProductDetails />} />

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
