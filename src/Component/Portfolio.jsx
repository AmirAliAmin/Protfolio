import React, { useState } from "react";
import "../Component/Potfolio.css";
import gal1 from "../Images/gallery-7.png";
import gal2 from "../Images/gallery-8.png";
import gal3 from "../Images/gallery-9.png";
import gal4 from "../Images/gallery-10.png";
import gal5 from "../Images/gallery-11.png";
import gal6 from "../Images/gallery-12.png";
import gal7 from "../Images/blog-3.avif";
import gal8 from "../Images/blog-2.avif";
import gal9 from "../Images/blog-4.avif";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      img: gal1,
      p: "Currency Convertor",
      category: "React",
      link: "#"
    },
    {
      id: 2,
      img: gal2,
      p: "Speech Recognition",
      category: "React",
      link: "https://speech-recognitionbyamir.vercel.app/"
    },
    {
      id: 3,
      img: gal3,
      p: "ToDo",
      category: "React",
      link: "https://todobyamir.vercel.app/"
    },
    {
      id: 4,
      img: gal4,
      p: "Trello project",
      category: "React",
      link : "https://trellobyamir.vercel.app/"
    },
    {
      id: 5,
      img: gal5,
      p: "Bg-Gradient Changer",
      category: "JavaScript",
      link: "https://bgchangebyamir.vercel.app/"
    },
    {
      id: 6,
      img: gal6,
      p: "Stop Watch",
      category: "JavaScript",
      link: "#"
    },
    {
      id: 7,
      img: gal7,
      p: "dribble project",
      category: "CSS",
    },
    {
      id: 8,
      img: gal8,
      p: "local project",
      category: "CSS",
    },
    {
      id: 9,
      img: gal9,
      p: "behance project",
      category: "Final Year Project",
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
              <button
                onClick={() => {
                  filterItem("all");
                }}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  filterItem("React");
                }}
              >
                React
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  filterItem("JavaScript");
                }}
              >
                JavaScript
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  filterItem("CSS");
                }}
              >
                CSS
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  filterItem("Final Year Project");
                }}
              >
                Final Year Project
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
                    style={{ width: "100%", height: "40vh" }}
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
