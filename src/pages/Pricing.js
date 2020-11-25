import ImageHelper from '../components/ImageHelper'

function Pricing() {
    return (
        <div className="background-div">
            <div id="header" class="jumbotron d-flex flex-column justify-content-center align-items-center m-0 text-center">
                <h1 class="display-3">Season: March - December 31st</h1>
                <p class="lead">Call 270-773-2323 for more information</p>
                <p class="lead">Onyx Cave, 93 Huckleberry Knob Road Cave City, KY 42127</p>
                <h1 class="display-3">Info:</h1>
                <p class="lead">Tours are approximently 30 minutes long</p>
                <p class="lead">Bring a camera to capture the unique formations within the cave!</p>
            </div>
            <div id="gallery" class="bg-dark p-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src={ImageHelper.PricingImageAdult} class="card-img-top" alt="AdultPrices" />
                                <div class="card-body">
                                    <h5 class="card-title">Ages 12 and Older</h5>
                                    <p class="card-text">$9.50</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src={ImageHelper.PricingImageTeen} class="card-img-top" alt="ChildrenHeader" />
                                <div class="card-body">
                                    <h5 class="card-title">Ages 5 - 11</h5>
                                    <p class="card-text">$6.50</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src={ImageHelper.PricingImageKid} class="card-img-top" alt="4andUnderHeader" />
                                <div class="card-body">
                                    <h5 class="card-title">Ages 4 and Younger</h5>
                                    <p class="card-text">Free</p>
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