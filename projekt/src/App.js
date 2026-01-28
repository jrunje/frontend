
import { BrowserRouter, Routes, Route } from "react-router";
import './Gutenberg.css';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from './Vozila.js/Home';
import Blog from './Vozila.js/Blog';
import BlogSingle from "./Vozila.js/Blogsingle";
import Profil from "./components/zadaci/Profil";
import Korisnici from "./components/zadaci/Korisnici"
import Tecaj from "./components/zadaci/Tecaj"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogsingle" element={<BlogSingle />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici"element={<Korisnici />} /> 
        <Route path="/tecaj"element={<Tecaj />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;