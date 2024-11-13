import "./Restart.css"
import { GiPingPongBat } from "react-icons/gi";

function Restart() {
    return (
        <div className="Restart-background">
            <div className="timer">06 : 46</div>
            <div className="Scores">
                <div className="Rectangle" >
                    <div className="result">7</div>
                </div>
                <div className="Rectangle">
                    <div className="result">3</div>
                </div>
            </div>
            <div className="bar">
                <div className="right-text">xxx</div>
                <div className="Restart-vs">
                    <span className="Rest-S">S</span>
                    <span className="Rest-V">V</span>
                    </div>
                <div className="left-text">yyy</div>
            </div>
                    <div className="Restart-button">
                        <button className="Restart-b"> <GiPingPongBat /> <span className="Restart">Restart</span></button>
                    </div>
               
        
        </div>
    );
}
export default Restart;