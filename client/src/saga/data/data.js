import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../api/Api';

export function* getData(action): Generator<*, *, *> {
  console.log('action', action);
  console.log(`/api/search?q=${action.payload}`);
  try {
    const response = yield call(Api.getJSON, `/api/search?q=${action.payload}`);
    console.log('response', response);
    yield put({
      type: 'GET_DATA_SUCCESS',
      payload: response.data.response.docs
    });
  } catch (error) {
    yield console.log(error);
  }
}
function* watchData(): Generator<*, *, *> {
  yield takeLatest('GET_DATA', getData);
}

export default [
  watchData()
];
