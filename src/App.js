import logo from './logo.svg';
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


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />


      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
