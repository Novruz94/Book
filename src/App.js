import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
