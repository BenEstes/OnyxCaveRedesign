import Carousel from '../components/ImageCarousel'
import CaveInfoCard from '../components/CaveInfoCard'
import ImageHelper from '../components/ImageHelper'


function Features() {
    return (
        <div className='features-container'>
            <Carousel />
            <div class='card-container'>
                <CaveInfoCard
                    cardImage={ImageHelper.CaveCoralMaybe}
                    cardDescription='Dripstone is formed as water drips from the ceiling of a cave, leaving behind small deposits of calcite. Formations that are created through this process include stalactites, stalagmites, and columns.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper}
                    cardDescription=''
                />
                <CaveInfoCard
                    cardImage={ImageHelper}
                    cardDescription=''
                />
                <CaveInfoCard
                    cardImage={ImageHelper}
                    cardDescription=''
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveTourCaveBacon}
                    cardDescription='Cave bacon is formed from mineral deposits as water runs down the walls of the cave. The layers of the cave bacon can take on different colors depending on the impurities in the water, resulting in the thin layers of stripped calcite resembling bacon in appearance.

            This cave bacon is part of a larger wall of cave bacon - a wall often called the "waterfall wall" because it looks like a frozen waterfall.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveDrappery}
                    cardDescription="Cave drapery, also known as curtains, is simply large cave bacon. Due to its size it resembles large curtains hanging from the cave wall, instead of slices of bacon.

            This particular drapery is located beside the cave's largest column."
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveCoral}
                    cardDescription='Cave coral forms as water seeps through the pores in the limestone pushing out the minerals as it emerges.

            Onyx Cave is best known for the abundance of cave coral that covers its wall. Cave coral can be seen on the walls as well as on pieces of cave bacon and columns throughout the cave.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveTourNeedltites}
                    cardDescription='Needltites are a special form of cave coral. They have sharp points, just like needles.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper}
                    cardDescription=''
                />
            </div>
        </div>
    );
}
export default Features