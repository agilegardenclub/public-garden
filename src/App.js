import React, { useEffect } from 'react';
import Top from './sections/Top.js';
import Bottom from './sections/Bottom.js';
import Overview from './sections/Overview';
import About from './sections/About';
import GardenTimelines from './sections/GardenTimelines';
import ChapterPlantHistory from './sections/ChapterPlantHistory';
import { getGardenName } from './components/GardenName';

const App = () => {
  const gardenID = getGardenName();
  useEffect(() => {
    document.title = `AGC Public Garden (${gardenID})`;
  }, []);

  return (
    <div>
      <Top/>
      <About/>
      <Overview/>
      <GardenTimelines/>
      <ChapterPlantHistory/>
      <Bottom/>
    </div>
  );
};

export default App;
