import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Importing the Bootstrap CSS
import './css/theme.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
