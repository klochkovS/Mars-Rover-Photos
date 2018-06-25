import { connect } from 'react-redux';
import Photos from '../Components/Photos';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  photo: state.photos,
});

const PhotosContainer = connect(
  mapStateToProps,
)(Photos);

export default PhotosContainer;
