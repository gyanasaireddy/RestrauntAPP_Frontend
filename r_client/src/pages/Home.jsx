import React from 'react';
// import './Home.css'; // Optional: put your styles here or use Tailwind/Bootstrap as needed
import '../App.css'

const Home = () => {
  return (
    <div className="text-center cover-container d-flex  h-100 p-3 mx-auto flex-column justify-content-between">
       {/* <img src="/anoutPage.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" /> */}
  

      <main role="main" className="inner cover align-self-center mt-5 pt-5 px-0">
        <img src="/logo.png" alt="Logo" className="logo m-2"  />
        <h1 className="cover-heading display-4 fw-bol">The Clay Pot Kitchen</h1>
        <p >
          <strong className='fw-semibold fst-italic mb-3 lead'>Rustic Recipes. Contemporary Charm.</strong>
          <br />
          <span className=' fst-italic mb-3 '>
           The Clay Pot Kitchen reimagines comfort food<br />through 
slow cooking, bold spices, and artistic presentation.  
          </span>

        </p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-outline-light fw-bold px-4">Reserve</a>
        </p>
      </main>


    </div>
  );
};

export default Home;
