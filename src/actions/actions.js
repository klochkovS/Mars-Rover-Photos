import fetch from 'cross-fetch';
import C from '../constants';

const manifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=DEMO_KEY';
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY';

export function fetchPhotos() {
  return (dispatch, getState) => {
    dispatch({
      type: C.GET_PHOTOS_REQUEST,
    });
    console.log('-----------------', getState());
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch({ type: C.GET_PHOTOS_SUCCESS, ...json }));
  };
}
