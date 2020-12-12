import React, { PureComponent } from 'react'

import ImageHelper from './ImageHelper'

class Carousel extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            images: [
              ImageHelper.BusinessPreview2,
              ImageHelper.CaveTourSights1,
              ImageHelper.CaveTourSights2,
              ImageHelper.CaveTourSights3,
              ImageHelper.CaveTourSights4,
              ImageHelper.CaveTourSights5,
              ImageHelper.CaveTourSights6, 
              ImageHelper.CaveTourSights7, 
              ImageHelper.CaveTourSights8
            ]
        }
        this.interval = null
    }

    componentDidMount() {
      this.interval = setInterval(this.handleCarouselRightPress, 15000)
    }

    componentWillUnmount() {
      if (this.interval) clearInterval(this.interval)
    }

    handleCarouselLeftPress = () => {
        const { currentIndex, images } = this.state;
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1
        this.setState({ currentIndex: index });
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
                <div className='left-arrow' onClick={this.handleCarouselLeftPress}>
                  <i className="fas fa-arrow-circle-left"></i>
                </div>
                <div className='right-arrow' onClick={this.handleCarouselRightPress}>
                  <i className="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        )
    }
}
export default Carousel