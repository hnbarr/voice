import React from 'react';
import './main.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Router />
        </div>
      </BrowserRouter>
  );
}

export default App;
