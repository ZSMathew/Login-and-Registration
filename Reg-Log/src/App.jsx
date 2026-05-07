import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegLog from './RegLog';
import Dashboard from './dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegLog />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
