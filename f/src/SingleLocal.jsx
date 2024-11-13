import './SingleLocal.css'

function SingleLocal() {
    return (
        <div className='SingleLocal-background'>
            <div className="SingleLocal-container">
                <div className="SingleLocal-icon"></div>
            </div>
            <div className="SingleLocal-container">
                <div className='vs'>
                    <span class="Sv">V</span>
                    <span class="Ss">S</span>
                </div>
            </div>
            <div className="SingleLocal-container">
                <div className='b'>
                    <button className='ch'>Challenge a Friend</button>
                    <button className='solo'>Solo Practice</button>
                </div>
            </div>
        </div>
    );
}
export default SingleLocal;
