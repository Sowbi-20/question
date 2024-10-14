// frontend/question/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataPage1 from './components/DataPage1';
import DataPage2 from './components/DataPage2';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="flex space-x-4 p-4">
          <Link to="/page1" className="text-blue-500">Page 1</Link>
          <Link to="/page2" className="text-blue-500">Page 2</Link>
        </nav>
        <Routes>
          <Route path="/page1" element={<DataPage1 />} />
          <Route path="/page2" element={<DataPage2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
