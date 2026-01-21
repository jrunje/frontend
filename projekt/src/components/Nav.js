import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container">
        
        <Link className="navbar-brand" to="/index.html">
          <img src="img/header/logo.svg" alt="logo" height="12"/> 
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> 
        </button>

        <div className="navbar-collapse collapse show" id="mainNavbar">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
         <li className="nav-item dropdown text-end">
              <Link className="nav-link dropdown-toggle" to="./Pages/Naslovnica.js" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">Naslovnica</Link>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><Link className="dropdown-item text-end" to="#">Electric Ace</Link></li>
                <li><Link className="dropdown-item text-end" to="#">Electric Ivy</Link></li>
              </ul>
            </li>
          <li className="nav-item dropdown text-end">
              <Link className="nav-link dropdown-toggle" to="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">O nama</Link>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><Link className="dropdown-item text-end" to="./Pages/Onama">Caféracer</Link></li>
                <li><Link className="dropdown-item text-end" to="#">Robyn</Link></li>
              </ul>
            </li>
           <li className="nav-item dropdown text-end">
              <Link className="nav-link dropdown-toggle" to="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</Link>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><Link className="dropdown-item text-end" to="#">El Bear</Link></li>
                <li><Link className="dropdown-item text-end" to="#">El Robin</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-end" to="#">Kontakt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-end" to="#">STORES</Link>
            </li>
           <li className="nav-item dropdown text-end">
              <Link className="nav-link dropdown-toggle" to="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">LEASING</Link>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><Link className="dropdown-item text-end" to="#">Private</Link></li>
                <li><Link className="dropdown-item text-end" to="#">Business</Link></li>
              </ul>
            </li>
          </ul>

    <ul className="navbar-nav ms-auto align-items-center">
      <li className="nav-item">
        <Link className="nav-link" to="/signin" title="Sign in">
            <img src="img/header/user.svg" alt="Sign in" className="icon-sm"/>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart" title="Cart">
            <img src="img/header/cart.svg" alt="Cart" className="icon-lg "/>
        </Link>
      </li>
    </ul>
          
        </div>
      </div>
    </nav>

  )
}

export default Nav