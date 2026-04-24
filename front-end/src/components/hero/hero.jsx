import React from "react";
import GoodBoy from "../assets/aoashi.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <p className="hero-tag">NEW ARRIVALS ONLY</p>

        <h1 className="hero-title">
          new <span className="wave">👋</span>
          <br />
          collections
          <br />
          every week
        </h1>

        <button className="hero-btn">
          Latest Collection <span>→</span>
        </button>
      </div>

      <div className="hero-right">
        <img src={GoodBoy} alt="model" />
      </div>
    </div>
  );
};

export default Hero;

