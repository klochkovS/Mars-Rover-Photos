import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <header>
    <h1>
      Hello, World!
    </h1>
  </header>

);

render(
  <App />, document.getElementById('root'),
);
