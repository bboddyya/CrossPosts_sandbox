import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutWrapper">
      <h1>ABOUT US</h1>
      <div className="aboutTitle">
        After Twitter was blocked in Russia, millions of people were left
        without the opportunity to <span className="el">EXPRESS</span>{" "}
        themselves to others, to <span className="el">SPEAK</span> with others,
        to <span className="el">TELL</span> others what is happening around
        them.{" "}
        <Link to="/profile">
          <span className="el">CrossPosts</span>
        </Link>{" "}
        gives people this opportunity. World leaders, celebrities and ordinary
        people have already joined us,{" "}
        <span className="el">we only need you!</span>
      </div>
    </div>
  );
}

export default About;
