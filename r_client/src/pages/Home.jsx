import React from 'react';
// import './Home.css'; // Optional: put your styles here or use Tailwind/Bootstrap as needed
import '../App.css'

const Home = () => {
  return (
    <div className="text-center cover-container d-flex align-items-center h-100 p-3 mx-auto flex-column">
       {/* <img src="/anoutPage.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" /> */}
  
      {/* <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand"> </h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header> */}

      <main role="main" className="inner cover align-self-center mt-5 pt-5">
        <img src="/logo.png" alt="Logo" className="App-logo mx-2"  />
        <h1 className="cover-heading">The Clay Pot Kitchen</h1>
        <p className="lead">
          Cover is a one-page template for building simple and beautiful home pages.
          Download, edit the text, and add your own fullscreen background photo to make it your own.
        </p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>


    </div>
  );
};

export default Home;
