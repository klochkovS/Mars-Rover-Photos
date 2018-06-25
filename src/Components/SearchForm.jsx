import React from 'react';
import { v4 } from 'uuid';

const cameras = {
  FHAZ: 'Front Hazard Avoidance Camera',
  RHAZ: 'Rear Hazard Avoidance Camera',
  MAST: 'Mast Camera',
  CHEMCAM: 'Chemistry and Camera Complex',
  MAHLI: 'Mars Hand Lens Imager',
  MARDI: 'Mars Descent Imager',
  NAVCAM: 'Navigation Camera',
  PANCAM: 'Panoramic Camera',
  MINITES: 'Miniature Thermal Emission Spectrometer(Mini - TES)',
};

const SearchForm = ({ isLoading, getPhotos }) => (
  <form>
    <label htmlFor="">Choose a Rover</label>
    <select>
      <option>Curiosity</option>
      <option>Opportunity</option>
      <option>Spirit</option>
    </select>
    <br />
    <input type="date" />
    <br />
    <label htmlFor="">Choose a camera</label>
    <select>
      {Object.keys(cameras).map(index =>
        <option key={v4()} value={index}>{cameras[index]}</option>
      )}
    </select>
    <div onClick={getPhotos}>Поиск</div>
  </form>
);

export default SearchForm;
