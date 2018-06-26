import { connect } from 'react-redux';
import Photos from '../Components/Photos';

const mapStateToProps = state => ({
  isLoading: state.photos.isLoading,
  photo: state.photos.photos,
});

const PhotosContainer = connect(
  mapStateToProps,
)(Photos);

export default PhotosContainer;
