import GiftShopCard from '../../components/GiftShopCard'
import ImageHelper from '../../components/ImageHelper'
import './GiftShop.css'

function GiftShop() {
    return (
        <div>
            <div className='giftshop-page-container'>
                <div className="welcome-container">
                    <h1>Welcome to the Rock Shop!</h1>
                    <h3>Browse the Onyx Cave Rock Shop for a variety of minerals, rocks, fossils, and jewelry.</h3>
                </div>
                <div className='giftshop-items'>
                    <GiftShopCard image={ImageHelper.GiftShopAmethystCollection} itemName='Amethyst Collection' imageAlt='Amethyst Collection' />
                    <GiftShopCard image={ImageHelper.GiftShopBismuth} itemName='Bismuth' imageAlt='Bismuth' />
                    <GiftShopCard image={ImageHelper.GiftShopChessBoard} itemName='Chess Board' imageAlt='Chess Board' />
                    <GiftShopCard image={ImageHelper.GiftShopGemstoneTree} itemName='Gemstone Trees' imageAlt='Gemstone Tree' />
                    <GiftShopCard image={ImageHelper.GiftShopGemstoneTree2} itemName='Crystal Necklaces' imageAlt='Crystal Necklaces' />
                    <GiftShopCard image={ImageHelper.GiftShopFossilAmmonite} itemName='Ammonites' imageAlt='Ammonite' />
                    <GiftShopCard image={ImageHelper.GiftShopFossilTrilobite} itemName='Trilobites' imageAlt='Trilobite' />
                    <GiftShopCard image={ImageHelper.GiftShopRockAnimals} itemName='Rock Animals' imageAlt='Rock Animals' />
                    <GiftShopCard image={ImageHelper.GiftShopHeartAmethyst} itemName='Heart-shaped Amethysts' imageAlt='Heart-shaped Amethysts' />
                    <GiftShopCard image={ImageHelper.GiftShopJewelry} itemName='Jewelry' imageAlt='Jewelry' />
                    <GiftShopCard image={ImageHelper.GiftShopNecklaces} itemName='Crystal Necklaces' imageAlt='Crystal Necklaces' />
                    <GiftShopCard image={ImageHelper.GiftShopPetrifiedWood} itemName='Petrified Wood' imageAlt='Petrified Wood' />
                    <GiftShopCard image={ImageHelper.GiftShopRocks} itemName='Rocks' imageAlt='Rocks' />
                    <GiftShopCard image={ImageHelper.GiftShopShirts} itemName='T-Shirts' imageAlt='T-Shirts' />
                    <GiftShopCard image={ImageHelper.GiftShopSkulls} itemName='Crystal Skulls' imageAlt='Crystal Skulls' />
                    <GiftShopCard image={ImageHelper.GiftShopWhiteInside} itemName='Geodes' imageAlt='Geodes' />
                </div>
            </div>
        </div>
    )
}

export default GiftShop