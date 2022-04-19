import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './index.css';
import Home from './page/Home';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
