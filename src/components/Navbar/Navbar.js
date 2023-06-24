import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg pb-4">
            <div className="container bg-black text-emphasis-white ">
            <div className="bg-black text-emphasis-dark"/>
        <Link to="/" className="fs-1 ubuntu navbar-brand">
          {" "}
          <span className="text-light-emphasis">Rick & Morty </span>
          <span className="text-danger"> Wiki </span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-danger "></span>
          <span class="fas fa-times close text-danger"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end text-light-emphasis " id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5">
              <NavLink activeClassName="active" to="/" className="nav-link text-light-emphasis">Characters</NavLink>
              <NavLink to="/episodes" className="nav-link text-light-emphasis">Episode</NavLink>
              <NavLink to="/location" className="nav-link text-light-emphasis">Location</NavLink>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar