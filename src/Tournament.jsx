// Tournament.jsx
import React from "react";
import "./Tournament.css";

function Tournament() {
  return (
    <div className="tournament-background">
      <div className="Tournament-container">
        <div className="Tournament-icon"></div>
        <p className="name">xxxx</p>
      </div>
        <span class="v">V</span>
        <span class="s">S</span>
      <div className="Tournament-container">
        <div className="Tournament-container">
          <div className="Tournament-icon"></div>
          <p className="name">AI</p>
        </div>
        <div className="Tournament-container">
          <div className="Tournament-icon"></div>
          <p className="name">Friends</p>
        </div>
      </div>
    </div>
  );
}

export default Tournament;
