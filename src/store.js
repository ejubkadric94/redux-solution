import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// reducers
import matterListReducer from './Matter/model/listReducer';
import matterDetailsReducer from './Matter/model/detailsReducer';

// sagas
import matterSagas from './Matter/model/sagas';

// please keep reducers in alphabetical order
const createRootReducer = (history) =>
  combineReducers({
    matterList: matterListReducer,
    matterDetails: matterDetailsReducer,
    router: connectRouter(history),
  });

function* rootSaga() {
  yield all([...matterSagas]);
}

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      )
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
