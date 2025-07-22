import React from "react";
import '../App.css'

function Navbar() {
  return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="/logo.png" alt="Logo" className="App-logo mx-2" />
            <span>The Clay Pot Kitchen</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/reserve">Reserve</a></li>
                  <li><a className="dropdown-item" href="/admin">Admin Login</a></li>
                </ul>
              </li>
            </ul>

            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              <a href="/reserve" className="btn btn-dark">Make Reservation</a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
