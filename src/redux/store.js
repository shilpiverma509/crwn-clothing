import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import {persistStore} from "redux-persist";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { fetchCollectionsStart } from './shop/shop.saga';
// const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk];

// const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middlewares));

// sagaMiddleware.run(fetchCollectionsStart);

 const persistor = persistStore(store);

export  { store, persistor };