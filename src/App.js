import React, { useEffect } from 'react';
import Top from './sections/Top.js';
import Bottom from './sections/Bottom.js';
import Overview from './sections/Overview';
import About from './sections/About';
import Plantings from './sections/Plantings';
import Seeds from './sections/Seeds';

const App = () => {
  useEffect(() => {
    document.title = 'AGC Public Garden (45ght3cf)';
  }, []);

  return (
    <div>
      <Top/>
      <About/>
      <Overview/>
      <Plantings/>
      <Seeds/>
      <Bottom/>
    </div>
  );
};

export default App;
