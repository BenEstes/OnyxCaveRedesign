import ImageHelper from '../components/ImageHelper'
import './Pricing.css'

function Pricing() {
    return (
        <div className="background-div">
            <div id="header" className="jumbotron d-flex flex-column justify-content-center align-items-center m-0 text-center">
                <h1 className="display-3">Season: March - December 31st</h1>
                <p className="lead">Call 270-773-2323 for more information</p>
                <p className="lead">Onyx Cave, 93 Huckleberry Knob Road Cave City, KY 42127</p>
                <h1 className="display-3">Info:</h1>
                <p className="lead">Tours are approximently 30 minutes long</p>
                <p className="lead">Bring a camera to capture the unique formations within the cave!</p>
            </div>
            <div>
                <div className='pricing-card'>
                    <img src={ImageHelper.PricingPostCard} alt="Pricing Post Card - Adults 12+ $9.50 "/>
                    <h3>Adults 12+</h3>
                    <h3>$9.50</h3>
                </div>
                <div className='pricing-card'>
                    <img src={ImageHelper.PricingPostCard} alt="Pricing Post Card - Children 5-11 $6.50 "/>
                    <h3>5-11</h3>
                    <h3>$6.50</h3>
                </div>
                <div className='pricing-card'>
                    <img src={ImageHelper.PricingPostCard} alt="Pricing Post Card - 4&Younger FREE "/>
                    <h3>4 & Younger</h3>
                    <h3>FREE</h3>
                </div>
            </div>
        </div>
    );
}
export default Pricing