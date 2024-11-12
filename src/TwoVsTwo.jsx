import React from "react";
import "./TwoVsTwo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function TwoVsTwo() {
  return (
    <div className="TwoVsTwo-background">
      <div className="TwoVsTwo-container">
        <div className="TwoVsTwo-icon"></div>
        <p className="TwoVsTwo-name">xxxx</p>
      </div>
      <div className="TwoVsTwo-container">
      <span class="v">V</span>
      <span class="s">S</span>
    <div className="TwoVsTwo-button">
      <button className="TwoVsTwo-b"><FontAwesomeIcon icon={faTrophy} />
      PLAY</button>
    </div>

      </div>
      <div className="TwoVsTwo-container">
        <div className="TwoVsTwo-icon"></div>
        <p className="TwoVsTwo-name">Friends</p>
      </div>
    </div>
  );
}

export default TwoVsTwo;