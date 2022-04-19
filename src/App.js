import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StarWarsProvider from './context/StarWarsProvider';
import './index.css';
import Home from './page/Home';

function App() {
  return (
    <StarWarsProvider>
      <Switch>
        <Route to="/" component={ Home } />
      </Switch>
    </StarWarsProvider>
  );
}

export default App;
