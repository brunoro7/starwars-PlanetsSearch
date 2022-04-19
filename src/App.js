import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StarWarsProvider from './context/StarWarsProvider';
import './index.css';
import Home from './page/Home';

function App() {
  return (
    <StarWarsProvider>
      <BrowserRouter>
        <Switch>
          <Route to="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </StarWarsProvider>
  );
}

export default App;
