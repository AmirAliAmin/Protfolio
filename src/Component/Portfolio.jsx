import React, { useState } from "react";
import "../Component/Potfolio.css";
import gal1 from "../Images/gallery-1.avif";
import gal2 from "../Images/gallery-2.avif";
import gal3 from "../Images/blog-1.avif";
import gal4 from "../Images/gallery-4.avif";
import gal5 from "../Images/gallery-5.avif";
import gal6 from "../Images/gallery-6.avif";
import gal7 from "../Images/blog-3.avif";
import gal8 from "../Images/blog-2.avif";
import gal9 from "../Images/blog-4.avif";


export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      img: gal1,
      p: "youtube project",
      category: "logo",
    },
    {
      id: 2,
      img: gal2,
      p: "local project",
      category: "logo",
    },
    {
      id: 3,
      img: gal3,
      p: "mockup project",
      category: "logo",
    },
    {
      id: 4,
      img: gal4,
      p: "saas project",
      category: "logo",
    },
    {
      id: 5,
      img: gal5,
      p: "youtube project",
      category: "video",
    },
    {
      id: 6,
      img: gal6,
      p: "mockup project",
      category: "video",
    },
    {
      id: 7,
      img: gal7,
      p: "dribble project",
      category: "graphic",
    },
    {
      id: 8,
      img: gal8,
      p: "local project",
      category: "graphic",
    },
    {
      id: 9,
      img: gal9,
      p: "behance project",
      category: "mockup",
    },
  ];

  const [items, setItems] = useState(portfolio);

  const filterItem = (ctg) => {
    if (ctg === "all") {
      setItems(portfolio); 
    } else {
      const updatedItems = portfolio.filter((item) => item.category === ctg);
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <div className="portfolio">
        <div className="portfolio-title">
          <h1>
            my <span style={{ color: "#ffb400" }}>portfolio</span>
          </h1>
          <span className="p-title-bg">works</span>
        </div>
        <div className="p-navbar">
          <ul>
            <li>
              <button  onClick={() => {  filterItem("all"); }}>
                All
              </button>
            </li>
            <li>
              <button  onClick={() => {filterItem("logo"); }}>
                Logo
              </button>
            </li>
            <li>
              <button onClick={() => { filterItem("video"); }}>
                Video
              </button>
            </li>
            <li>
              <button  onClick={() => { filterItem("graphic"); }}>
                Graphic Design
              </button>
            </li>
            <li>
              <button  onClick={() => { filterItem("mockup"); }}>
                Mockup
              </button>
            </li>
          </ul>
        </div>
        <div className="row mt-5 container">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card1">
                <div className="bg-gallery">
                  <p>{item.p}</p>
                </div>
                <div className="card-body">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.img}
                    alt={item.p}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}
