import React, { useState, useRef } from 'react';
import Navbar from './assets/navbar/navbar';
import './App.css';

//My Assets
import Intropg from './assets/IntroPage/intropg';
import About from './assets/about/about';
import Portfolio from './assets/portfolio/portfolio';
import Contact from './assets/contact/contact';
import Custombg from './assets/background/custombg';
import Projects from './assets/projects/projects';

function App() {

  //FOR BACKGROUND COLOR CHANGE
  //sets the colorswitch state
  const [colorswitch, setcolorswitch] = useState(false);
  //if scroll mroe than 80px colorswitch is true thus "blackout" is applied and vice versa
  const changeColor = () =>{ window.scrollY >=80 ? setcolorswitch(true) : setcolorswitch(false)}
  window.addEventListener('scroll', changeColor);

  
  return (
    <div className={colorswitch ? 'blackout' : 'whiteout'}>
      <div>
          <header className='app'>
            <Navbar/>
            <Intropg/>
          </header>
          <div className='maincontent'>
          <Custombg/>
            <About/>
            <Portfolio/>
            <Projects/>
            <Contact/>
          </div>
      </div>
    </div>
  );
}

export default App;
