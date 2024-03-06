import Footer from  "./components/Footer";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import AllTrophy from "./components/allTrophy";
import Beforefooter from "./components/Beforefooter"
import React from 'react';
import CustomNavbar  from './components/customNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="max-w-5xl mx-auto">
      <p className="text-4xl">Best Website builders in the US</p>
      <hr></hr>
      <p>Last Updated - February 22, 2020     Advertising Disclosure

      </p>
      <p className="top-relevant-container">Top Relevant</p>

      
      <hr></hr>
      <CustomNavbar/>
      <AllTrophy/>
      <Cards/>
      <Beforefooter/>
      </div>
     
    <Footer/>
    </div>
  );
}

export default App;
