import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lockscreen from './components/lockscreen';
import Home from './components/home';

const root = createRoot(document.getElementById('root')); // Create a root

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lockscreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
