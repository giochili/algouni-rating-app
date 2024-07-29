import React from "react";
import "./Result.css";
import Thanks from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="result-container">
      <img className="ty-img" src={Thanks} alt="thanks-image" />
      <div className="selected-div">You selected {rate} out of 5</div>
      <h1 className="ty-header">Thank you!</h1>
      <p className="ty-para">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
