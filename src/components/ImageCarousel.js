
function ImageCarousel(props) {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.image1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.image2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.image3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.image4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.image5} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.image6} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default ImageCarousel