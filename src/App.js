import './App.css';
import NavBar from './NavBar';
import GiftShopCard from './GiftShopCard';
import Images from './ImageHelper';
import ImageCarousel from './ImageCarousel'



function App() {
  return (
    <div className="app-Container">
      <NavBar/>
      <GiftShopCard 
        imageSrc={Images.BusinessPreview}
        imageAlt='Exmaple Item Alt Description'
        itemName='Crystal Tree'
      />
      <GiftShopCard 
        imageSrc={Images.CaveBaconMaybe}
        imageAlt='Exmaple Item Alt Description'
        itemName='Crystal Tree'
      />
      {/* <ImageCarousel 
        image={GiftShopCrystalTree}  
      /> */}
    </div>
  );
}

export default App;
