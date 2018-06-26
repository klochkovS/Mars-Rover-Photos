import { connect } from 'react-redux';
import { fetchPhotos, getSearchData } from '../actions/actions';
import SearchForm from '../Components/SearchForm';

const mapStateToProps = state => ({
  maxSol: state.manifest.maxSol,
  photoMetaData: state.manifest.photoMetadata,
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(fetchPhotos()),
  getSearchData: roverName => dispatch(getSearchData(roverName)),
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

export default SearchFormContainer;
