import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import './Gutenberg.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Naslovnica from "./Pages/Naslovnica";
import Blog from "./Pages/Blog";
import BlogSingle from "./Pages/BlogSingle";
import Onama from "./Pages/Onama";
import Usluge from "./Pages/Usluge";
import Kontakt from "./Pages/Kontakt";


import Profil from "./components/zadaci/Profil";
import Korisnici from "./components/zadaci/Korisnici";
import Tecaj from "./components/zadaci/Tecaj";
import Kategorije from "./Pages/Kategorije";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import AdminLayout from "./Pages/Admin/AdminLayout";
import MyDetails from "./Pages/Admin/MyDetails";
import MyPosts from "./Pages/Admin/MyPosts";
import Settings from "./Pages/Admin/Settings";

import AuthorsTable from "./Pages/AuthorsTable";
import AuthorSingle from "./Pages/AuthorSingle";
import Vozila from "./Pages/Vozila";
import VozilaSingle from "./Pages/VozilaSingle";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/o-nama" element={<Onama />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kategorije" element={<Kategorije />} />

        <Route path="/vozila" element={<Vozila />} />
        <Route path="/vozila/:slug" element={<VozilaSingle />} />

        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici" element={<Korisnici />} />
        <Route path="/tecaj" element={<Tecaj />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/autori" element={<AuthorsTable />} />
        <Route path="/autor/:nickname" element={<AuthorSingle /> } />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="mydetails" element={<MyDetails />} />
          <Route path="myposts" element={<MyPosts />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;