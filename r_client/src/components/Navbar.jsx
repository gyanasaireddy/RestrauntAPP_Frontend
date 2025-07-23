import React from "react";
import '../App.css'

function Navbar() {
  return (
      //     <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      //   <div className="container-fluid ">
      //     <a className="navbar-brand d-flex align-items-center  d-lg-none" href="/">
      //       <img src="/logo.png" alt="Logo" className="App-logo mx-2" />
      //       <span>The Clay Pot Kitchen</span>
      //     </a>

      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target="#navbarsExample11"
      //       aria-controls="navbarsExample11"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>

      //     <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
      //       <ul className="navbar-nav col-lg-6 justify-content-lg-start">
      //         <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="/">Home</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="/menu">Menu</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="/about">About</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="/contact">Contact</a>
      //         </li>
      //         <li className="nav-item dropdown">
      //           <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
      //             More
      //           </a>
      //           <ul className="dropdown-menu">
      //             <li><a className="dropdown-item" href="/reserve">Reserve</a></li>
      //             <li><a className="dropdown-item" href="/admin">Admin Login</a></li>
      //           </ul>
      //         </li>
      //       </ul>

      //       <div className="d-lg-flex col-lg-6 justify-content-lg-end">
      //         <a href="/reserve" className="btn btn-dark">Make Reservation</a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
            <header className="masthead mb-auto pt-2">
        <div className="inner">
          <h3 className="masthead-brand"> </h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>
  );
}

export default Navbar;
