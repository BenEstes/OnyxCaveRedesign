import GiftShopCard from '../components/GiftShopCard'
import ImageHelper from '../components/ImageHelper'
import './GiftShop.css'

function GiftShop() {
    return (
        <>
            <div className='giftshop-page-container'>
                <div className="welcome-container">
                    <h1>Welcome to the Rock Shop!</h1>
                    <h3>Browse the Onyx Cave Rock Shop for a variety of minerals, rocks, fossils, and jewelry.</h3>
                </div>
                <div className='giftshop-items'>
                    <GiftShopCard image={ImageHelper.GiftShopAmythestCollection} itemName='Amythest Collection' />
                    <GiftShopCard image={ImageHelper.GiftShopBismuth} itemName='Bismuth' />
                    <GiftShopCard image={ImageHelper.GiftShopChessBoard} itemName='Chess Board' />
                    <GiftShopCard image={ImageHelper.GiftShopCrystalTree} itemName='Crystal Tree' />
                    <GiftShopCard image={ImageHelper.GiftShopCrystalTree2} itemName='Crystal Necklaces' />
                    <GiftShopCard image={ImageHelper.GiftShopFossils} itemName='Fossils' />
                    <GiftShopCard image={ImageHelper.GiftShopFossilShells} itemName='Fossils' />
                    <GiftShopCard image={ImageHelper.GiftShopFossilSingle} itemName='Fossil' />
                    <GiftShopCard image={ImageHelper.GiftShopGlassAnimals} itemName='Glass Animals' />
                    <GiftShopCard image={ImageHelper.GiftShopHeartAmythest} itemName='Heart-shaped Amythests' />
                    <GiftShopCard image={ImageHelper.GiftShopJewelry} itemName='Jewelry' />
                    <GiftShopCard image={ImageHelper.GiftShopNecklaces} itemName='Crystal Necklaces' />
                    <GiftShopCard image={ImageHelper.GiftShopPetrifiedWood} itemName='Petrified Wood' />
                    <GiftShopCard image={ImageHelper.GiftShopPurpleGreenClearCrystal} itemName='???' />
                    <GiftShopCard image={ImageHelper.GiftShopRocks} itemName='Rock Bags' />
                    <GiftShopCard image={ImageHelper.GiftShopShirts} itemName='T-Shirts' />
                    <GiftShopCard image={ImageHelper.GiftShopSkulls} itemName='Crystal Skulls' />
                    <GiftShopCard image={ImageHelper.GiftShopWhiteInside} itemName='???' />
                </div>
            </div>
        </>
    )
}

export default GiftShop