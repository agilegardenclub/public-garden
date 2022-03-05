import React, { useEffect } from 'react';
import Top from './Top.js';
import Bottom from './Bottom.js';
import Overview from './Overview';
import About from './About';

const App = () => {
  useEffect(() => {
    document.title = 'AGC Public Garden 22';
  }, []);

  return (
    <div>
      <Top/>
      <About/>
      <Overview/>
      <Bottom/>
    </div>
  );
};

export default App;
