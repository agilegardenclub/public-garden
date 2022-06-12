import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Importing the Bootstrap CSS from the theme file
import './css/theme.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<BrowserRouter><Routes><Route path="*" element={<App />} /></Routes></BrowserRouter>);
