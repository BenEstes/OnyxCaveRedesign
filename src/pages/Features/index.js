import Carousel from '../../components/ImageCarousel'
import CaveInfoCard from '../../components/CaveInfoCard'
import ImageHelper from '../../components/ImageHelper'
import './Features.css'


function Features() {
    return (
        <div className='features-container'>
            <Carousel />
            <div className='card-container'>
                <CaveInfoCard
                    cardImage={ImageHelper.CaveCoral}
                    cardName='Cave Coral'
                    cardDescription='Cave coral forms as water seeps through the pores in the limestone pushing out the minerals as it emerges.

                    Onyx Cave is best known for the abundance of cave coral that covers its wall. Cave coral can be seen on the walls as well as on pieces of cave bacon and columns throughout the cave.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveTourNeedltites}
                    cardName='Needltites'
                    cardDescription='Needltites are a special form of cave coral. They have sharp points, just like needles.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveColumn}
                    cardName='Columns'
                    cardDescription='When a stalactite - growing down - and a stalagmite - growing up - join, it is called a column.

                    This picture is a column located in the main chamber. It measures only three inches tall, but about fifteen feet further down the path is a 40-foot tall column.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveStalactites}
                    cardName='Stalactites'
                    cardDescription='Stalactites grow from the ceiling of a cave.

                    As water travels through the air and soil it picks up carbon dioxide, forming a weak carbonic acid. This weak acid will dissolve the limestone above the cave as well as pick up minerals in the soil.
                    
                    That water enters the cave, leaving small deposits of calcite where the water is hanging.
                    
                    Stalactites, which resemble icicles, are pointed at the end because water will hang from the end before falling off.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveBacon}
                    cardName='Cave Bacon'
                    cardDescription='Cave bacon is formed from mineral deposits as water runs down the walls of the cave. The layers of the cave bacon can take on different colors depending on the impurities in the water, resulting in the thin layers of stripped calcite resembling bacon in appearance.

                    This cave bacon is part of a larger wall of cave bacon - a wall often called the "waterfall wall" because it looks like a frozen waterfall.'
                />
                <CaveInfoCard
                    cardImage={ImageHelper.CaveDrappery2}
                    cardName='Cave Drappery'
                    cardDescription="Cave drapery, also known as curtains, is simply large cave bacon. Due to its size it resembles large curtains hanging from the cave wall, instead of slices of bacon.

                    This particular drapery is located beside the cave's largest column."
                />
            </div>
        </div>
    );
}
export default Features