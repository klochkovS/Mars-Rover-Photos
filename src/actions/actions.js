import fetch from 'cross-fetch';
import C from '../constants';

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY';

export function fetchPhotos() {
  return (dispatch) => {
    dispatch({
      type: C.GET_PHOTOS_REQUEST,
    });
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch({ type: C.GET_PHOTOS_SUCCESS, ...json }));
  };
}

export const getSearchData = roverName => (dispatch) => {
  // dispatch({
  //   type: C.GET_MANIFEST_REQUEST,
  // });
  const manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=DEMO_KEY`;
  return fetch(manifestUrl)
    .then(response => response.json())
    .then(json => dispatch({ type: C.GET_MANIFEST, ...json }));
};
