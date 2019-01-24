import reducers from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(applyMiddleware(
    sagaMiddleware
));

const store = createStore(reducers, enhancers);
sagaMiddleware.run(rootSaga);

export default store;