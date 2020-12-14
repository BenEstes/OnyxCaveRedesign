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
                    <GiftShopCard image={ImageHelper.GiftShopAmythestCollection} itemName='Amythest Collection' imageAlt='Amythest Collection' />
                    <GiftShopCard image={ImageHelper.GiftShopBismuth} itemName='Bismuth' imageAlt='Bismuth' />
                    <GiftShopCard image={ImageHelper.GiftShopChessBoard} itemName='Chess Board' imageAlt='Chess Board' />
                    <GiftShopCard image={ImageHelper.GiftShopCrystalTree} itemName='Crystal Tree' imageAlt='Crystal Tree' />
                    <GiftShopCard image={ImageHelper.GiftShopCrystalTree2} itemName='Crystal Necklaces' imageAlt='Crystal Necklaces' />
                    <GiftShopCard image={ImageHelper.GiftShopFossils} itemName='Fossils' imageAlt='Fossils' />
                    <GiftShopCard image={ImageHelper.GiftShopFossilShells} itemName='Fossils' imageAlt='Fossils' />
                    <GiftShopCard image={ImageHelper.GiftShopGlassAnimals} itemName='Glass Animals' imageAlt='Glass Animals' />
                    <GiftShopCard image={ImageHelper.GiftShopHeartAmythest} itemName='Heart-shaped Amythests' imageAlt='Heart-shaped Amythests' />
                    <GiftShopCard image={ImageHelper.GiftShopJewelry} itemName='Jewelry' imageAlt='Jewelry' />
                    <GiftShopCard image={ImageHelper.GiftShopNecklaces} itemName='Crystal Necklaces' imageAlt='Crystal Necklaces' />
                    <GiftShopCard image={ImageHelper.GiftShopPetrifiedWood} itemName='Petrified Wood' imageAlt='Petrified Wood' />
                    <GiftShopCard image={ImageHelper.GiftShopRocks} itemName='Rock Bags' imageAlt='Rock Bags' />
                    <GiftShopCard image={ImageHelper.GiftShopShirts} itemName='T-Shirts' imageAlt='T-Shirts' />
                    <GiftShopCard image={ImageHelper.GiftShopSkulls} itemName='Crystal Skulls' imageAlt='Crystal Skulls' />
                    <GiftShopCard image={ImageHelper.GiftShopWhiteInside} itemName='Geodes' imageAlt='Geodes' />
                </div>
            </div>
        </div>
    )
}

export default GiftShop