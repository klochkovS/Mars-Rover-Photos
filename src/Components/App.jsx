import React, { Component } from 'react';
import SearhForm from './SearchForm';

const App = ({ isLoading, getPhotos }) => (
  <header>
    <label onClick={getPhotos}>
      {isLoading ? 'загрузка' : 'не загрузка'}
    </label>

    <h1>Mars Rover Photos</h1>
    <SearhForm />
  </header>
);


export default App;
