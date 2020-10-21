import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { Container } from 'semantic-ui-react'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
