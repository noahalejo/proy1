import React from 'react';
import  ReactDOM  from 'react-dom';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Section from './components/Section';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">
      
      <Nav />
      <Slider />
      <Section />
      <Ubicacion />
      <Footer />
    </div>
  );
}

export default App;
