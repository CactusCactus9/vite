// Tournament.jsx
import React from "react";
import "./Tournament.css";
import { GiPingPongBat } from "react-icons/gi";


function Tournament() {
  return (
    <div className="tournament-background">
      <div className="Tournament-container">
        <div className="Tournament-icon"></div>
        <p className="name">xxxx</p>
      </div>
      <div className="Tournament-container">
        <span class="v">V</span>
        <span class="s">S</span>
        <div className="Tournament-button">
          <button className="Tournament-b"> <GiPingPongBat /> <span className="Play">PLAY</span></button>
        </div>
      </div>
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
