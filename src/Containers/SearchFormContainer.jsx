import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/actions';
import SearchForm from '../Components/SearchForm';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(fetchPhotos()),
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

export default SearchFormContainer;
