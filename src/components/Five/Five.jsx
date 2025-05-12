import "./five.css";
import Pic1 from "../img/pic1.jpg";
import Pic2 from "../img/pic2.jpg";
import React from "react";

const Five = () => {
  return <div className="fi">
      <div className="blog-back">
          <div className="blog-head">Resources</div>
          <p className="blog-about">
          Stay informed with our legal insights and resources. Our attorneys <br />
          regularly publish articles on important legal topics, case studies, <br />
          and updates on changing laws that may affect you or your business. <br />
          Browse our recent publications below.
          </p>
          <div className="cards">
              <div className="card-head">Understanding Corporate Liability: A Guide for Business Owners</div>
              <img src={Pic1} alt="Corporate Liability" className="card-image" />
          </div>
          <div className="cards-2">
              <div className="card-head-2">Family Law: Navigating Child Custody Arrangements</div>
              <img src={Pic2} alt="Family Law" className="card-image" />
          </div>
          <div className="cards-3">
              <div className="card-head">Intellectual Property Rights in the Digital Age</div>
          </div>
          <div className="cards-4">
              <div className="card-head-2">Real Estate Transactions: Legal Considerations</div>
          </div>
          <div className="cards-5"></div>
          <div className="cards-6"></div>
      </div>
      <div className="footer">
          <p className="digi">Schedule a consultation today</p>
          <h1 className="get-in">Contact Us</h1>
      </div>
      <div className="credit">Vardhan & Co. Law Firm  &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;© 2023 All Rights Reserved</div>
  </div>;
};

export default Five;
