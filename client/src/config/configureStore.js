import reducers from "../reducers/index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancers = composeEnhancers(applyMiddleware(
    sagaMiddleware
));

const store = createStore(reducers, enhancers);
sagaMiddleware.run(rootSaga);

export default store;