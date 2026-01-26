import { BrowserRouter, Routes, Route } from "react-router";

import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Naslovnica from './pages/Naslovnica';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Onama from "./pages/Onama";
import Usluge from "./pages/Usluge";
import Kontakt from "./pages/Kontakt";

import Profil from "./components/zadaci/Profil";
import Korisnici from "./components/zadaci/Korisnici";
import Tecaj from "./components/zadaci/Tecaj";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogsingle" element={<BlogSingle />} />
        <Route path="/o-nama" element={<Onama />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/kontakt" element={<Kontakt />} />


        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici" element={<Korisnici />} />
        <Route path="/tecaj" element={<Tecaj />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;