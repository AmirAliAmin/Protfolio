import React from "react";
import "../Home.css";
import image from "../Images/Amir1.png";
import { FaArrowRight } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Portfolio from "./Portfolio";

export default function Home() {
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
          >
            <h2 className="text-center">MORE ABOUT ME </h2>

            <div className="icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="modal" id="myModal" style={{width:"90%"}} >
            <div className="modal-dialog" style={{width:"100%", maxWidth: "100%"}} >
              <div class="modal-content"style={{width:"100%"}}  >
                <div className="modal-header" style={{background:"black"}}>
                  <h4 className="modal-title"></h4>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal" style={{background:"white"}}
                  >X</button>
                </div>
                <div className="modal-body" style={{width:"100%", padding: "0",background:"black"}}>
                <About/>

                </div>
              </div>
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
