import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ loading }) => {
  return (
    <div className={`loading-overlay ${loading ? "active" : "hidden"}`}>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingScreen;