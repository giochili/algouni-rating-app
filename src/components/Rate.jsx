import React, { useState } from "react";
import "./Rate.css";
import Star from "/images/icon-star.svg";

export default function Rate({ setSubmit, rate, setRate }) {
  const buttons = [1, 2, 3, 4, 5];
  return (
    <div className="Rate-Container">
      <div className="img-container">
        <img src={Star} alt="star-icon" />
      </div>
      <h1 className="header">How did we do?</h1>
      <p className="para">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="button-container">
        {buttons.map((item) => (
          <button
            key={item}
            onClick={() => setRate(item)}
            style={{
              backgroundColor: rate == item ? "#7c8798" : "",
              color: rate == item ? "#fff" : "",
            }}
            className="btn"
          >
            {item}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={() => rate && setSubmit(true)}>
        SUBMIT
      </button>
    </div>
  );
}
