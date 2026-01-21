import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Home from './Pages/Naslovnica.js';
import Blog from "./Pages/Blog";
import Blogsingle from "./Pages/Blogsingle.js";
import Onama from "./Pages/Onama";
import Kontakt from "./Pages/Kontakt.js";

import Profil from "./components/zadaci/Profil";



function App() {
  return (
  
  <BrowserRouter>
  <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
    
      <Route path="/onama" element={<Onama/>} />
      <Route path="/blog" element={<Blog/>} />

      <Route path="/profil" element={<Profil/>} />
    </Routes>
  <Footer />
  </BrowserRouter>

  );
  
}

export default App;