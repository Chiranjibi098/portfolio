import React from "react";
import "../assets/CSS/CodersHeart.css";

function CodersHeartSection() {
  return (
    <div className="prototype-section codersheart-wrapper">
      <h5
        className="prototype-section-heading"
        style={{ marginBottom: "10px" }}
      >
        My Product
      </h5>

      <div className="codersheart-box">
        <div className="codersheart-thumb">
          <img
            src="https://api.microlink.io/?url=https://codersheart.in&screenshot=true&meta=false&embed=screenshot.url"
            alt="CodersHeart Thumbnail"
          />
        </div>

        <div className="codersheart-info">
          <h3>CodersHeart</h3>
          <p>A modern blogging platform built for developers.</p>

          <a
            href="https://codersheart.in"
            target="_blank"
            className="codersheart-btn"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default CodersHeartSection;
