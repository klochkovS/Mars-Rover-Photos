import C from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case C.GET_PHOTOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case C.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photos: action.photos,
      };
    default:
      return state;
  }
};

export const manifest = (state = {}, action) => {
  switch (action.type) {
    case C.GET_MANIFEST:
      return {
        ...state,
        roverName: action.name,
        landingDate: action.landing_date,
        launchDate: action.launch_date,
        status: action.status,
        maxSol: action.max_sol,
        totalPhotos: action.total_photos,
        //photosMetadata: [sol, total_photos, cameras[]]

      };
    default:
      return state;
  }
}
