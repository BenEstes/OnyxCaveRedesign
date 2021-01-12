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


// React-Router

export default function App() {
  return (
    <Router>
      <div className="parent-container">
        <nav className="navbar navbar-expand-lg navbar-dark onyx-dark">

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href={'/'} className="navbar-brand">Onyx Cave</a>
              <Link className="nav-link" to='/'>Home</Link>
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
          
          <h5 className='follow-us'>Follow Us On Facebook: <a href="https://www.facebook.com/onyxcave" rel="noreferrer" target='_blank'><i className="fab fa-facebook"></i></a>
          </h5>

          <h5 className='stay-connected'>Stay Connected:
            <a href='tel:+12707732323' style={{color: 'black', textDecoration: 'underline'}}> (270) 773-2323</a>
          </h5>

          <h5 className='built-by'>Website Built and Powered By:
            <a href='https://sites.google.com/barren.kyschools.us/bcskillsdevelopmentacademy' rel="noreferrer" target='_blank' style={{color: 'black', textDecoration: 'underline'}}> BCSkills</a>
          </h5>

        </div>
      </div>
    </Router>
  );
}