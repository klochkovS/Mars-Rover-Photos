import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { photos, manifest } from './reducers';

const initialState = {
  // isLoading: false,
};

const reducers = combineReducers({ manifest, photos });

const logger = createLogger();

const storeFactory = () => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, logger),
);

export default storeFactory;
