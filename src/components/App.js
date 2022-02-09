import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import ResortList from "./ResortList";
import Hero from "./Hero";

import '../assests/css/App.css';
import "../assests/css/utilities.css"

const App = () => {
  
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
        <Hero/>
        <ResortList/>
      </main>
      <Footer/>
    </div>

  );
};

export default App;


