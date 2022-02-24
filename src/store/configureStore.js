import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import greetingReducer from './greeting/greeting';

const reducers = combineReducers({
  greeting: greetingReducer,
});

const middleWares = [thunk];

export default function configureStore() {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleWares)),
  );
  return store;
}
