import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloPage from './Pages/HelloPage/HelloPage';
import InfoPage from './Pages/InfoPage/InfoPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<HelloPage />} />
              <Route path="/info-page" element={<InfoPage />} />
          </Routes>
      </Router>
  </React.StrictMode>
);