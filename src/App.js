import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import Features from './components/Features';
import ExtraInfo from './components/ExtraInfo';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Features />
      <ExtraInfo />
      <Footer />
    </div>
  );
}

export default App;
