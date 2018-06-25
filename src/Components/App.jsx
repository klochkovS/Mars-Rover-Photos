import React from 'react';
import SearchFormContainer from '../Containers/SearchFormContainer';
import PhotosContainer from '../Containers/PhotosContainer';

const App = () => (
  <header>
    <h1>Mars Rover Photos</h1>
    <SearchFormContainer />
    <PhotosContainer />
  </header>
);


export default App;
