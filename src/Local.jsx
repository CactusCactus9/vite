import './Local.css';
// import Banner from '../../components/Banner';
// import { SlControlPlay } from "react-icons/sl";


function Local() {
  return (
    <>
    <div className='menu-background'>
      {/* <div className="Ban"><Banner/></div> */}
      <div className='menu-container'>
        <div className='logo'>
          <p>
            <sup>
              <span>P</span>
              <span className='o'></span>
              <span>N</span>

            </sup>
            <span className='g'>G</span>
            <span>AME</span>
          </p>
        </div>
        <div className='menu-buttons'>
          <button className='button'><span className='icon'></span>Single Game</button>
          {/* <button className='button'><span className='icon'><SlControlPlay /></span>Single Game</button> */}
          <button className='button'><span className='icon'></span>Tournament</button>
          {/* <button className='button'><span className='icon'><SlControlPlay /></span>Tournament</button> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Local;