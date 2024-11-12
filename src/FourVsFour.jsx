import "./FourVsFour.css"
// import { GiPingPongBat } from "react-icons/gi";

function FourVsFour() {
    return (
        <div className="FourVsFour-background">
            <div className="FourVsFour-container">
                <div className="FourVsFour-container">
                    <div className="FourVsFour-icon"></div>
                    <p className="name">xxxx</p>
                </div>
                <div className="FourVsFour-container">
                    <div className="FourVsFour-icon"></div>
                    <p className="name">xxxx</p>
                </div>
            </div>
            <div className="FourVsFour-container">
                <span class="v">V</span>
                <span class="s">S</span>
                <div className="FourVsFour-button">
                    {/* <button className="FourVsFour-b"> <GiPingPongBat /> <span className="Play">PLAY</span></button> */}
                    <button className="FourVsFour-b">  <span className="Play">PLAY</span></button>
                </div>
            </div>
            <div className="FourVsFour-container">
                <div className="FourVsFour-container">
                    <div className="FourVsFour-icon"></div>
                    <p className="name">xxxx</p>
                </div>
                <div className="FourVsFour-container">
                    <div className="FourVsFour-icon"></div>
                    <p className="name">xxxx</p>
                </div>
            </div>
        </div>
    );
}
export default FourVsFour;