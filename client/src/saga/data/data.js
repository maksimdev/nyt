import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../api/Api';
import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_MORE_DATA,
  GET_MORE_DATA_SUCCESS,
  GET_DATA_FAILURE
} from '../../reducers/data';

export function* getData(action): Generator<*, *, *> {
  try {
    const response = yield call(Api.getJSON, `/api/search?q=${action.payload}`);
    yield put({
      type: GET_DATA_SUCCESS,
      payload: response.data.response.docs
    });
  } catch (error) {
    yield put({
      type: GET_DATA_FAILURE,
      payload: error
    });
  }
}
function* watchData(): Generator<*, *, *> {
  yield takeLatest(GET_DATA, getData);
}

export function* getMoreData(action): Generator<*, *, *> {
  try {
    const response = yield call(Api.getJSON, `/api/search?q=${action.payload.queryString}&page=${action.payload.page}`);
    yield put({
      type: GET_MORE_DATA_SUCCESS,
      payload: response.data.response.docs
    });
  } catch (error) {
    yield put({
      type: GET_DATA_FAILURE,
      payload: error
    });
  }
}
function* watchMoreData(): Generator<*, *, *> {
  yield takeLatest(GET_MORE_DATA, getMoreData);
}

export default [
  watchData(),
  watchMoreData()
];
