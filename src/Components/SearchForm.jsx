import React, { Component } from 'react';
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

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sol: '',
    };
    this.handleRoverPick = this.handleRoverPick.bind(this);
    this.handleSolPick = this.handleSolPick.bind(this);
  }

  handleRoverPick(e) {
    const { getSearchData } = this.props;
    const { value } = e.target;
    getSearchData(value);
  }

  handleSolPick(e) {
    const { value } = e.target;
    this.setState({ sol: +value });
  }

  render() {
    const { photoMetaData } = this.props;
    return (
      <form>
        <label htmlFor="">Choose a Rover </label>
        <select name="roverName" onChange={this.handleRoverPick}>
          <option></option>
          <option>Curiosity</option>
          <option>Opportunity</option>
          <option>Spirit</option>
        </select>
        <br />

        <label>Sol:</label>
        <input
          type="number"
          onChange={this.handleSolPick}
          min="1"
          max={this.props.maxSol}
          step="1"
        />
        <br />

        <label htmlFor="">Choose a camera </label>
        <select>
          {photoMetaData && this.state.sol && photoMetaData
            .filter(val => val.sol === this.state.sol)[0]
            .cameras.map(val => (
              <option key={v4()} value={val}>
                {cameras[val]}
              </option>
            ))
          }
        </select>

        <div onClick={this.props.getPhotos}>Поиск</div>
      </form>
    );
  }
}


export default SearchForm;
