import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/actions';
import App from '../Components/App';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(fetchPhotos()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
