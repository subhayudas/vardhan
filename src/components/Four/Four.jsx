import "./four.css";
import Z from "../img/agency.mp4";
import React from "react";

const Four = () => {
  return <div className="f">
      <h2 className="about-agency">
          At Vardhan & Co., we believe in providing exceptional <br />
          legal representation with integrity and dedication. <br />
          Founded in 2005, our firm has built a reputation for <br />
          excellence in various practice areas of law. <br />
          <br />
          Our approach combines thorough legal knowledge with <br />
          personalized attention to each client's unique needs. <br />
          We strive to deliver practical solutions and favorable <br />
          outcomes in every case we handle. <br />
          <br />
          VARDHAN & CO.
      </h2>
      <div className="agency">About Us</div>

      <div className="agen">
      <video loop muted autoPlay className="agency-vid">
        <source
          src={Z}
          type="video/mp4"
        />
       </video>
      </div>
      <div className="texxt-area">
      <button className="Button-pos">Our Philosophy</button>
      <p className="about-text">
      Our firm is built on the principles of trust, excellence, and client satisfaction. <br />
      We take pride in our ability to navigate complex legal challenges with precision <br />
      and strategic thinking. <br />
      <br />
      With a team of experienced attorneys led by Aditya Vardhan Sharma and Himangi Kapoor, <br />
      we are committed to upholding the highest standards of legal practice and ethics.
      </p>
      </div>
  </div>;
};

export default Four;


