import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      <Container className='mainContainer'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
