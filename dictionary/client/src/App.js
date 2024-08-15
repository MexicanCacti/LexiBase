import React from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/App.css';
import Home from './pages/home';
import Create from './pages/create';
import Review from './pages/review';
import Add from './pages/add';



function App() {
  const [selectedDb, setSelectedDb] = useState("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home selectedDb={selectedDb} setSelectedDb={setSelectedDb}/>} />
          <Route path="/create" element={<Create selectedDb={selectedDb} setSelectedDb={setSelectedDb}/>} />
          <Route path="/review" element={<Review selectedDb={selectedDb} setSelectedDb={setSelectedDb}/>} />
          <Route path="/add" element={<Add selectedDb={selectedDb} setSelectedDb={setSelectedDb}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
