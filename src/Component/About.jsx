import React from "react";
import "../Component/About.css";
import { IoBagHandle } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import cv from "../Images/Amir.pdf";
import { BiBorderLeft } from "react-icons/bi";

export default function About() {
  const card = [
    {
      h: "1",
      dis: "Year of experience",
    },
    {
      h: "10",
      dis: "Mini project",
    },
    {
      h: "2",
      dis: "Scholarship from Govt.",
    },
    {
      h: "3.8",
      dis: "CGPA ",
    },
  ];
  const skill = [
    {
      h: "50%",
      dis: "HTML",
      borderColor: "white",
      borderTop: "9px solid var(--bg)",
      borderLeft: "9px solid var(--bg)",
    },
    {
      h: "50%",
      dis: "JAVASCRIPT",
      borderTop: "9px solid var(--bg)",
      borderLeft: "9px solid var(--bg)",
    },
    {
      h: "50%",
      dis: "CSS",
      borderTop: "9px solid var(--bg)",
      borderLeft: "9px solid var(--bg)",
    },
    {
      h: "25%",
      dis: "Github",
      borderTop: "9px solid var(--bg)",
      borderLeft: "9px solid var(--bg)",
      borderRight: "9px solid var(--bg)",
    },
    {
      h: "50%",
      dis: "REACT",
      borderTop: "9px solid var(--bg)",
      borderLeft: "9px solid var(--bg)",
    },
  ];
  const education = [
    {
      date: "2021-2025",
      h: "Software Engineering - Islamia University of Bahawalpur",
      dis: "Pursuing a Bachelor's degree in Software Engineering with a current CGPA of 3.84. Ranked in the top 5% of the cohort, with a strong foundation in programming, data structures, and software development principles.",
    },
    {
      date: "12/11/2024 - 05/05/2025",
      h: "Web Developer - Coding First",
      dis: "Worked as a Web Developer at Coding First, contributing to the design and development of responsive websites and web applications. Focused on front-end technologies, performance optimization, and user experience enhancements.",
    },
    {
      date: "Dec 2024",
      h: "Web Development Certificate - IUB Skills & Career Development Society x NeuraFinity",
      dis: "Completed an intensive web development certification program focused on HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      date: "2024 - 2025",
      h: "Final Year Project - Emotion Detection & Recommendation System",
      dis: "Developed an Emotion Detection System that recommends movies and music based on user emotions. The frontend was built using React, while the backend and machine learning model were implemented using Flask and Python.",
    },
  ];

  function handleDownload() {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Amir.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div>
      <div className="about">
        <div className="about-title">
          <h1>
            about <span style={{ color: "#ffb400" }}>me</span>
          </h1>
          <span className="title-bg">resume</span>
        </div>
        <div className="row personal-info container">
          <div className="col-lg-6 col-md-12 col-sm-12 personal-detail">
            <h2 className="h2">Personal Infos</h2>
            <div className="row mt-3">
              {/* Flex container for personal info lists */}
              <div className="d-flex justify-content-between w-100">
                {/* Left list */}
                <div className="col-12 col-md-6">
                  <ul>
                    <li>
                      First Name: <span>Amir Ali</span>
                    </li>
                    <li>
                      Age: <span>22 Years</span>
                    </li>
                    <li>
                      Language: <span>Urdu, English</span>
                    </li>
                    <li>
                      Phone: <span>+92312-0848892</span>
                    </li>
                  </ul>
                </div>

                {/* Right list */}
                <div className="col-12 col-md-6 mb-3">
                  <ul>
                    <li>
                      Last Name: <span>Amin</span>
                    </li>
                    <li>
                      Nationality: <span>Pakistan</span>
                    </li>
                    <li>
                      Address: <span>Lahore</span>
                    </li>
                    <li>
                      Email: <span>aliaminamir77@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Download Button */}
              <div className="button btn mt-3">
                <h2 className="text-center m-0" onClick={handleDownload}>
                  Download CV
                </h2>
                <div className="icon" onClick={handleDownload}>
                  <FiMessageCircle />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 achivement">
            <div className="row g-3">
              {card.map((item, idx) => (
                <div className="col-6" key={idx}>
                  {" "}
                  {/* ⬅️ Force 2 per row */}
                  <div className="card1 text-center">
                    <h1 className="mb-0">
                      {item.h}
                      <sup>+</sup>
                    </h1>
                    <p className="mb-0">{item.dis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my_skill">
          <h3 className="text-center text-sm-center">MY SKILLS</h3>
          {/* 1️⃣ Put container outside the row for proper padding */}
          <div className="mx-auto pb-5" style={{width:"1050px"}}>
            {/* 2️⃣ g-4 adds gutter (space) between cards */}
            <div className="row g-6">
              {skill.map((item, idx) => (
                <div className="col-4 col-sm-6 col-lg-3" key={idx}>
                  <div className="skills">
                    <div
                      className="language"
                      style={{
                        borderTop: item.borderTop,
                        borderLeft: item.borderLeft,
                        borderRight: item.borderRight,
                      }}
                    >
                      <h3>{item.h}</h3>
                    </div>
                    <p>{item.dis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="experience">
          <h4 className="text-center">EXPERIENCE & EDUCATION</h4>
          <div className="row">
            {education.map((i, index) => (
              <div className="col-lg-5 col-sm-4 c-icon col-12" key={index}>
                <div className="icon">
                  <IoBagHandle />
                </div>
                <div className="education-detail">
                  <div className="badge">{i.date}</div>
                  <h5>{i.h}</h5>
                  <p>{i.dis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
