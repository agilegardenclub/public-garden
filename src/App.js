import React, { useEffect } from 'react';
import Top from './sections/Top.js';
import Bottom from './sections/Bottom.js';
import Overview from './sections/Overview';
import About from './sections/About';
import PlantingTimelines from './sections/PlantingTimelines';
import Plants from './sections/Plants';

const App = () => {
  useEffect(() => {
    document.title = 'AGC Public Garden (45ght3cf)';
  }, []);

  return (
    <div>
      <Top/>
      <About/>
      <Overview/>
      <PlantingTimelines/>
      <Plants/>
      <Bottom/>
    </div>
  );
};

export default App;
