import React from "react";
import "./splinemodel.css";

const SplineModel = () => {
  return (
    <div className="spline-section">
      <div className="spline-header">
        <h1 className="spline-title">Its about time to choose us</h1>
        <div className="spline-divider"></div>
      </div>

      <div className="spline-content-wrapper">
        <div className="spline-content">
          <p className="spline-description">
            Your problem is our problem, Your time is our time 
          </p>
          <div className="spline-instructions">
            <div className="instruction">
              <span className="instruction-number">01</span>
              <span className="instruction-text">Contact us</span>
            </div>
            <div className="instruction">
              <span className="instruction-number">02</span>
              <span className="instruction-text">be our client</span>
            </div>
            <div className="instruction">
              <span className="instruction-number">03</span>
              <span className="instruction-text">solve any problem</span>
            </div>
          </div>
        </div>

        <div className="spline-container">
        <spline-viewer url="https://prod.spline.design/ScA4ABeVnwLR0ONi/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </div>
  );
};

export default SplineModel;
