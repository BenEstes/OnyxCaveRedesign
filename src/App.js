import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import GiftShop from './pages/GiftShop'
import NoMatch from './pages/NoMatch'


// import GiftShopCard from './components/GiftShopCard';
// import Images from './components/ImageHelper';
// import ImageCarousel from './components/ImageCarousel'


// Old App Function, before React-Router was added
// function App() {
//   return (
//     <div className="app-Container">
//       <NavBar/>
//       <GiftShopCard 
//         imageSrc={Images.BusinessPreview}
//         imageAlt='Exmaple Item Alt Description'
//         itemName='Crystal Tree'
//       />
//       <GiftShopCard 
//         imageSrc={Images.CaveBaconMaybe}
//         imageAlt='Exmaple Item Alt Description'
//         itemName='Crystal Tree'
//       />
//       {/* <ImageCarousel 
//         image={GiftShopCrystalTree}  
//       /> */}
//     </div>
//   );
// }

// export default App;


// React-Router

export default function App() {
  return (
    <Router>
      <div className="parent-container">
        <nav className="navbar navbar-expand-lg navbar-dark onyx-dark">

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="navbar-brand">Onyx Cave</a>
              <Link className="nav-link" to='/'>Home<span className="sr-only">(current)</span></Link>
              <Link className="nav-link" to='/pricing'>Pricing</Link>
              <Link className="nav-link" to='/features'>Features</Link>
              <Link className="nav-link" to='/giftShop'>Rock Shop</Link>
              {/* <Link className="nav-link disabled" to='#' href="#" tabIndex="-1" aria-disabled="true">Disabled</Link> */}
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/pricing">
            <Pricing />
          </Route>

          <Route path="/features">
            <Features />
          </Route>

          <Route path="/giftShop">
            <GiftShop />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
        <div className="footer-info">
          
          <h5 className='follow-us'>Follow Us On Facebook: <a href="https://www.facebook.com/onyxcave" target='_blank'><i class="fab fa-facebook"></i></a>
          </h5>

          <h5 className='stay-connected'>Stay Connected:
            <h6>(270) 773-2323</h6>
          </h5>

          <h5 className='built-by'>Website Built and Powered By:
            <a href='https://sites.google.com/barren.kyschools.us/bcskillsdevelopmentacademy' target='_blank'> BCSkills</a>
          </h5>

        </div>
      </div>
    </Router>
  );
}



// Here for if I want to build all pages within the app.js file

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }