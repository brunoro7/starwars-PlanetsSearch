import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import StarWarsProvider from './context/StarWarsProvider';
import './index.css';
import Home from './page/Home';

function App() {
  return (
    <StarWarsProvider>
      <BrowserRouter>
        <Route to="/" component={ Home } />
      </BrowserRouter>
    </StarWarsProvider>
  );
}

export default App;
