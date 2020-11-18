import ImageHelper from '../components/ImageHelper'
import Carousel from '../components/ImageCarousel'


function Features(){
    return(
        <div>
            <Carousel 
            image1={ImageHelper.CaveTourPreview}
            image2={ImageHelper.CaveTourPreview2}
            image3={ImageHelper.CaveTourPreview3}
            image4={ImageHelper.CaveTourPreview4}
            image5={ImageHelper.CaveTourPreview5}
            image6={ImageHelper.CaveTourRandomPreview}
            />
        </div>
    );
}
export default Features