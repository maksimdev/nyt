import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../api/Api';

export function* getData(): Generator<*, *, *> {
  try {
    const response = yield call(Api.getJSON, '/api/search?q=obama', {});
    console.log('response', response);
    yield put({
      type: 'GET_DATA_SUCCESS',
      payload: response
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
