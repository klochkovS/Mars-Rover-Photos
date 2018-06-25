import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {
  isLoading: false,
};

const logger = createLogger();

const storeFactory = () => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, logger),
);

export default storeFactory;
