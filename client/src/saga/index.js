import { all } from 'redux-saga/effects';
import data from './data';

export function* rootSaga(): * {
  yield all([
    ...data
  ]);
}

export default rootSaga;
