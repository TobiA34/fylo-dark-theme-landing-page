import React from 'react'
import heroImg from "../images/illustration-intro.png";

function List() {
  return (
    <div className="container d-flex flex-column align-items-center reset">
      <img className=" mt-4" src={heroImg} alt="" />
      <h1 className="mt-3 text-center text-light">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-center mt-3 text-light">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <a href="" className="hero-btn">
        Get Started
      </a>
    </div>
  );
}

export default List
