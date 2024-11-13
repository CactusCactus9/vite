import "./FirstPage.css"
// import Banner from '../../components/Banner';
import PongSimulator from "./PongSimulator";
// import { GiPingPongBat } from "react-icons/gi";


function FirstPage() {
    return (
        <div className="First-page-background">
          {/* <div className="Ban"><Banner/></div>  */}
            <div className="PongFirstPage"><PongSimulator/></div>
            <div className="GameMode">
                <div className="Mode">
                    <span className="Dot LocalDot"></span>Local
                </div>
                <div className="Mode">
                    <span className="Dot OnlineDot"></span>Online
                </div>
            </div>
            
            <div className="Start-game">
                <button className="START"><GiPingPongBat />START</button>
            </div>
            
        
        </div>
    );
}
export default FirstPage;