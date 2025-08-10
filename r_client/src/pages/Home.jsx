import React from "react";
// import './Home.css'; // Optional: put your styles here or use Tailwind/Bootstrap as needed
import "../App.css";
import PreloaderWrapper from "./Preloader";
const Home = () => {
  const imageUrls = ["/logo.png", "/aboutPage.jpg"];
  return (
     <PreloaderWrapper imageUrls={imageUrls}>

     
    <div
      className="d-flex justify-content-center align-items-center p-2 my-2"
      style={{ height: "90vh" }}
    >
      <div className="text-center cover-container   h-100 p-3 mx-auto flex-column ">
        {/* <img src="/anoutPage.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" /> */}

        <main
          role="main"
          className="inner cover align-self-center mt-4 pt-4 px-0"
        >
          <img src="/logo.png" alt="Logo" className="logo m-2" />
          <h1 className="cover-heading display-4 fw-bol">
            The Clay Pot Kitchen
          </h1>
          <p>
            <strong className="fw-semibold fst-italic mb-3 lead">
              Rustic Recipes. Contemporary Charm.
            </strong>
            <br />
            <span className=" fst-italic mb-3 ">
              The Clay Pot Kitchen reimagines comfort food
              <br />
              through slow cooking, bold spices, and artistic presentation.
            </span>
          </p>
          <p className="lead">
            <a
              href="/reserve"
              className="btn btn-lg btn-outline-light fw-bold px-4"
            >
              Reserve
            </a>
          </p>
          <p className="lead">
            <a
              href="https://web-dev-portofolio.vercel.app/"
              target="_blank"
              className="btn btn-sm btn-outline-light fw-bold px-4"
            >
              Portfolio Project - Gjnana Sai Reddy
            </a>
          </p>
        </main>
      </div>
    </div>
    </PreloaderWrapper>
  );
};

export default Home;
