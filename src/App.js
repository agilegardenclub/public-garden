import React, { useEffect } from 'react';
import Top from './sections/Top.js';
import Bottom from './sections/Bottom.js';
import Overview from './sections/Overview';
import About from './sections/About';
import GardenTimelines from './sections/GardenTimelines';
import { getGardenName } from './components/GardenName';
import ChapterTimelines from './sections/ChapterTimelines';
import Outcomes from './sections/Outcomes';

const App = () => {
  const gardenName = getGardenName();
  useEffect(() => {
    document.title = `AGC Public Garden (${gardenName})`;
  }, []);

  return (
    <div>
      <Top/>
      <About/>
      <Overview/>
      <GardenTimelines/>
      <ChapterTimelines/>
      <Outcomes/>
      <Bottom/>
    </div>
  );
};

export default App;
