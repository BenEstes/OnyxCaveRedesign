import React, { PureComponent } from 'react'

import ImageHelper from './ImageHelper'


class Carousel extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            images: [ImageHelper.BusinessPreview2, ImageHelper.CaveTourSights1, ImageHelper.CaveTourSights2, ImageHelper.CaveTourSights3, ImageHelper.CaveTourSights4, ImageHelper.CaveTourSights5, ImageHelper.CaveTourSights6, ImageHelper.CaveTourSights7, ImageHelper.CaveTourSights8]
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
            <div className='carousel'>
                <div className='img-container'>
                    <img alt='Carousel slide' src={images[currentIndex]} />
                </div>
                <div className='left-arrow' onClick={this.handleCarouselLeftPress}><i className="fas fa-arrow-circle-left"></i></div>
                <div className='right-arrow' onClick={this.handleCarouselRightPress}><i className="fas fa-arrow-circle-right"></i></div>

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