// TournamentLocal.jsx
import React from "react";
import "./TournamentLocal.css";
// import { BiEditAlt } from "react-icons/bi";
// import { GiPingPongBat } from "react-icons/gi";


function TournamentLocal() {
  return (
    <div className="TournamentLocal-background">
        <div className="TournamentLocal-container">
            <div className="TournamentLocal-container">
                <div className="TournamentLocal-icon"></div>
                <div className="side-container">
                    <input type="text" className="name-r" defaultValue="Your name"/>
                    {/* <span className="edit-icon"><BiEditAlt /></span> */}
                </div>

            </div>
            <div className="TournamentLocal-container">
                <div className="TournamentLocal-icon"></div>
                <div className="side-container">
                    <input type="text" className="name-r" defaultValue="Your name"/>
                    {/* <span className="edit-icon"><BiEditAlt /></span> */}
                </div>

            </div>
        </div>
        <div className="vs">
            <span class="TLv">V</span>
            <span class="TLs">S</span>
        </div>
        <div className="TournamentLocal-container">
            <div className="TournamentLocal-container">
                <div className="TournamentLocal-icon"></div>
                <div className="side-container">
                    <input type="text" className="name" defaultValue="Your name"/>
                    {/* <span className="edit-icon"><BiEditAlt /></span> */}
                </div>
            </div>
            <div className="TournamentLocal-container">
                <div className="TournamentLocal-icon"></div>
                <div className="side-container">
                    <input type="text" className="name" defaultValue="Your name"/>
                    {/* <span className="edit-icon"><BiEditAlt /></span> */}
                </div>
            </div>
        </div>
        <div className="FVsF-button">
          {/* <button className="FVsF-b"> <GiPingPongBat /> <span className="Play">PLAY</span></button> */}
        </div>
    </div>
  );
}

export default TournamentLocal;
