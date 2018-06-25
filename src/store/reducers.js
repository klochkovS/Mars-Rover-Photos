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
      };
    default:
      return state;
  }
};
