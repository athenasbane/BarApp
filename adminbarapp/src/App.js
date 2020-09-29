import React from 'react';
import MainLayout from './components/UI/Layout/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout />
      </Router>
    </div>
  );
}

export default App;
