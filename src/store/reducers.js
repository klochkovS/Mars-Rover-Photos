import C from '../constants';

export const photos = (state = {}, action) => {
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

export const photoMetadata = (state = {}, action) => {
  switch (action.type) {
    case C.GET_PHOTO_MANIFEST:
      return {
        ...state,
        sol: action.photos.sol,
        totalPhotos: action.photos.total_photos,
        cameras: action.photos.cameras,
      };
    default:
      return state;
  }
};

export const photosMetadata = (state = {}, action) => {
  switch (action.type) {
    case C.GET_PHOTO_MANIFEST:
      return [
        ...state,
        photoMetadata({}, action),
      ];
    default:
      return state;
  }
};

export const manifest = (state = {}, action) => {
  switch (action.type) {
    case C.GET_MANIFEST:
      return {
        ...state,
        roverName: action.photo_manifest.name,
        landingDate: action.photo_manifest.landing_date,
        launchDate: action.photo_manifest.launch_date,
        status: action.photo_manifest.status,
        maxSol: action.photo_manifest.max_sol,
        totalPhotos: action.photo_manifest.total_photos,
        photoMetadata: action.photo_manifest.photos,

      };
    default:
      return state;
  }
};
