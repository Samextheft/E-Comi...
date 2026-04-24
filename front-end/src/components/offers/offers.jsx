import React from "react";
import "./offers.css";
import tantanchan from "../assets/tantanchan.jpg";
const Offers = () => {
  return (
    <div className=" offers">
      <div className="d-flex flex-column justify-content-center align-items-center offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For YOU</h1>
        <p>Get the best deals and exclusive offers on our products!</p>
        <button className="border-0 rounded-4 m-3">Check NOW!</button>
      </div>
      <div className="offers-right">
        <img src={tantanchan} alt="Tantanchan" />
      </div>
    </div>
  );
};

export default Offers;
