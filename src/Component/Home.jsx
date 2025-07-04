import React from "react";
import "../Home.css";
import image from "../Images/Amir1.png";
import { FaArrowRight } from "react-icons/fa";
import About from "./About"
import Contact from "./Contact"
import Portfolio from './Portfolio'
import Blog from './Blog'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); 
   const handleClick = () => {
    navigate("/about");                  
  };
  return (
    <div>
      <div className="homepage">
        <div className="back"></div>
        <div className="card">
          <div className="card-body">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="home-detail">
          <h1 className="home1" style={{ color: "#ffb400" }}>
            I'M AMIR ALI AMIN .
          </h1>
          <h1>WEB DESIGNER</h1>
          <br />
          <p>
            I'm a Pakistan based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <div
            className="button btn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            onClick={handleClick}
          >
            <h2 className="text-center">MORE ABOUT ME </h2>
            <div className="icon">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
      <Blog />
    </div>
  );
}
