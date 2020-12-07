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
            <div id="gallery" className="bg-dark p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={ImageHelper.PricingImageAdult} className="card-img-top" alt="AdultPrices" />
                                <div className="card-body">
                                    <h5 className="card-title">Ages 12 and Older</h5>
                                    <p className="card-text">$9.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={ImageHelper.PricingImageTeen} className="card-img-top" alt="ChildrenHeader" />
                                <div className="card-body">
                                    <h5 className="card-title">Ages 5 - 11</h5>
                                    <p className="card-text">$6.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={ImageHelper.PricingImageKid} className="card-img-top" alt="4andUnderHeader" />
                                <div className="card-body">
                                    <h5 className="card-title">Ages 4 and Younger</h5>
                                    <p className="card-text">Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing