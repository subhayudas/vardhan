import "./third.css";
import C from "../img/volvo.jpg";
import AdityaImg from "../img/aditya.png";
import HimangiImg from "../img/himangi.png";
import React from "react";

const Third = () => {
  return <div className="t">
      <div className="rec">Our <br /> Attorneys</div>
      <div className="rec-1">
          <h1 className="title-1">Aditya Vardhan Sharma</h1>
          <p className="des-1">Managing Partner - Corporate Law & Civil Litigation</p>
          <div className="sub-rec-1">
              <img src={AdityaImg} alt="Aditya Vardhan Sharma"  className="picdrop"/>
          </div>
      </div>
      <div className="rec-2">
          <h1 className="title-1">Himangi Kapoor</h1>
          <p className="des-1">Senior Partner - Family Law & Real Estate</p>
          <div className="sub-rec-1">
              <img src={HimangiImg} alt="Himangi Kapoor"  className="picdrop"/>
          </div>
      </div>
      <div className="rec-3">
          <h1 className="title-1">Rajiv Mehta</h1>
          <p className="des-1">Partner - Intellectual Property & Technology</p>
          <div className="sub-rec-1">
              <img src={C} alt="Rajiv Mehta"  className="picdrop"/>
          </div>
      </div>
      <div className="rec-4">
          <h1 className="title-1">Priya Sharma</h1>
          <p className="des-1">Associate - Criminal Defense & Immigration</p>
          <div className="sub-rec-1">
              <img src={C} alt="Priya Sharma"  className="picdrop"/>
          </div>
      </div>
      <div className="oval-2">
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

export default Third;
