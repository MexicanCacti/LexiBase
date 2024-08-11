import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/App.css';
import Home from './pages/home';
import Create from './pages/create';
import Review from './pages/review';
import Add from './pages/add';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/review" element={<Review />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
