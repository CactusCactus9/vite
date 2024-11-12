import React from "react";
import "./OneVsOne.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function OneVsOne() {
  return (
    <div className="onevsone-background">
      <div className="onevsone-container">
        <div className="onevsone-icon"></div>
        <p className="onevsone-name">xxxx</p>
      </div>
      <div className="onevsone-container">
      <span class="s">S</span>
      <span class="v">V</span>
    <div className="onevsone-button">
      /*<button className="onevsone-b"><FontAwesomeIcon icon={faTrophy} />*/
      PLAY</button>
    </div>

      </div>
      <div className="onevsone-container">
        <div className="onevsone-icon"></div>
        <p className="onevsone-name">Friends</p>
      </div>
    </div>
  );
}

export default OneVsOne;