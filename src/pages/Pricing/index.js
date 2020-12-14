import ImageHelper from '../../components/ImageHelper'
import './Pricing.css'

function Pricing() {
    return (
        <div className="background-div">
            <div id="header" className="jumbotron d-flex flex-column justify-content-center align-items-center m-0 text-center">
                <h1 className="display-3">Season:</h1>
                <p className="lead">March - December 31st</p>
                <p className="lead">Onyx Cave, 93 Huckleberry Knob Road Cave City, KY 42127</p>
                <h1 className="display-3">Info:</h1>
                <p className="lead">Tours are approximently 30 minutes long</p>
                <p className="lead">Bring a camera to capture the unique formations within the cave!</p>
            </div>

            <div className='pricing-card-container'>
            <h1 className='pricing-header'>Pricing</h1>
                <div className='pricing-card'>
                    <img className='pricing-card-img' src={ImageHelper.PricingPostCard} alt="Pricing Post Card - Adults 12+ $9.50 "/>
                    <h2 className='pricing-ages'>Adults 12+</h2>
                    <h2 className='pricing-price'>$9.50</h2>
                </div>
                <div className='pricing-card'>
                    <img className='pricing-card-img' src={ImageHelper.PricingPostCard} alt="Pricing Post Card - Children 5-11 $6.50 "/>
                    <h2 className='pricing-ages'>Ages 5-11</h2>
                    <h2 className='pricing-price'>$6.50</h2>
                </div>
                <div className='pricing-card'>
                    <img className='pricing-card-img' src={ImageHelper.PricingPostCard} alt="Pricing Post Card - 4&Younger FREE "/>
                    <h2 className='pricing-ages'>4 & Younger</h2>
                    <h2 className='pricing-price'>FREE</h2>
                </div>
            </div>
        </div>
    );
}
export default Pricing