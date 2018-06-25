import React from 'react';

const Photos = ({ isLoading, photo }) => (
  <section>
    {console.log(photo && photo.map(val => val.img_src))}
    <label>
      {isLoading ? 'Загрузка...' : ''}
    </label>
    {photo && photo.map(val => <img src={val.img_src} />)}
  </section>

);

export default Photos;
