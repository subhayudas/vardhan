import "./second.css";
import React from "react";

const Second = () => {
  return <div className="s">
      <div className="mani">Practice Areas</div>
      <div className="text-way">
          <p className="about">
          At Vardhan & Co., we provide exceptional legal representation <br />
          across a wide range of practice areas. Our experienced team <br />
          delivers personalized solutions with the highest level of <br />
          professionalism and dedication to our clients.
          </p>
        <p className="about-2">
          Our expertise includes Corporate Law, Civil Litigation, <br />
          Family Law, Real Estate Law, Intellectual Property, <br />
          Criminal Defense, and Immigration Law. <br />
          <br />
          <br />
          We approach each case with meticulous attention to detail <br />
          and a commitment to achieving the best possible outcomes. <br />
        </p>
      </div>
      <div className="oval">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        >
    </lottie-player>
      </div>
  </div>;
};

export default Second;
