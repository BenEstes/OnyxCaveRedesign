import React, { PureComponent } from 'react'

import ImageHelper from './ImageHelper'


class Carousel extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            images: [ImageHelper.BusinessPreview, ImageHelper.CaveTourPreview, ImageHelper.CaveTourPreview2, ImageHelper.CaveTourPreview3, ImageHelper.CaveTourPreview4, ImageHelper.CaveTourPreview5, ImageHelper.CaveTourRandomPreview]
        }
    }
    componentDidMount() {
        // If you wanted to, you could do a timer here to change the slide automatically
    }
    handleCarouselLeftPress = () => {
        const { currentIndex, images } = this.state;
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1

        this.setState({
            currentIndex: index
        })
        console.log(this.state.currentIndex);
        // this.setState((prevState) => ({ currentIndex: ((prevState.currentIndex - 1)) % prevState.images.length }))
        // console.log(this.state.currentIndex);
    }
    handleCarouselRightPress = () => {
        this.setState((prevState) => ({ currentIndex: (prevState.currentIndex + 1) % prevState.images.length }))
    }
    render() {
        const { currentIndex, images } = this.state
        return (
            <div>
                <div onClick={this.handleCarouselLeftPress}><i class="fas fa-arrow-circle-left"></i></div>
                <img alt='Carousel slide' src={images[currentIndex]} />
                <div onClick={this.handleCarouselRightPress}><i class="fas fa-arrow-circle-right"></i></div>
            </div>
        )
    }
}
export default Carousel




// <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
//     <div className="carousel-inner">
//         <div className="carousel-item active">
//             <img src={props.image1} className="d-block" alt="..." />
//         </div>
//         <div className="carousel-item">
//             <img src={props.image2} className="d-block" alt="..." />
//         </div>
//         <div className="carousel-item">
//             <img src={props.image3} className="d-block" alt="..." />
//         </div>
//         <div className="carousel-item">
//             <img src={props.image4} className="d-block" alt="..." />
//         </div>
//         <div className="carousel-item">
//             <img src={props.image5} className="d-block" alt="..." />
//         </div>
//         <div className="carousel-item">
//             <img src={props.image6} className="d-block" alt="..." />
//         </div>
//     </div>
//     <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//     </a>
// </div>