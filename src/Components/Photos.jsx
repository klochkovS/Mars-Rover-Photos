import React from 'react';
import { v4 } from 'uuid';

const Photos = ({ isLoading, photo }) => (
  <section>
    <label>
      {isLoading ? 'Загрузка...' : ''}
    </label>
    {photo && photo.map(val => <img key={v4()} src={val.img_src} />)}
  </section>

);

export default Photos;
