import "./home.css";
import A from "../img/bg.mp4";
import React from "react";

const Home = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return <div className="h">
        <div className="h-main">
        <div className="logo">Vardhan & Co.</div>
        <nav className="nav-links">
          <button className="Button ">Practice Areas</button>
          <button className="Button">Attorneys</button>
          <button className="Button">About Us</button>
          <button className="Button">Resources</button>
          <button className="Button">Contact</button>
        </nav>
        <nav className="langu">
          <button className="Button">Call Now</button>
        </nav>
        <div className="heading">Justice & <br />
        Excellence.
        </div>
        <div className="view">
        <button className="Button-view">Free Consultation</button>
        </div>
        <div className="date">{date}</div>
        

        <video loop muted autoPlay className="backdrop">
        <source
          src={A}
          type="video/mp4"
        />
       </video>

        </div>
  </div>;
};


export default Home;
