import './css/header.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import Collections from './components/collections';
import Furniture from './components/furniture';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/furniture' component={Furniture} />
          <Route path='/collections' component={Collections} />
          <Route path='/' component={HomePage }/>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
