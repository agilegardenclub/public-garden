import React, { useEffect } from 'react';
import Top from './Top.js';
import Bottom from './Bottom.js';

const App = () => {
  useEffect(() => {
    document.title = 'AGC Public Garden 2';
  }, []);

  return (
    <div>
      <Top/>
      <Bottom/>
    </div>
  );
};

export default App;
