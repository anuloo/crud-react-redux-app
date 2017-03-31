import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

const composeEnhancers = window.devToolsExtension ? window.devToolsExtension() : f => f
const middleWare = applyMiddleware(createLogger(), thunk, promise);

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      middleWare,
      composeEnhancers
    )
  );
}