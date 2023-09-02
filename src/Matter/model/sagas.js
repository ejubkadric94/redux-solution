import { call, put, takeLeading } from 'redux-saga/effects';
import { fetchMatterListError, storeMatterDetails, storeMatterList } from './actions';
import { matterApi } from './api';
import { MATTER } from './constants';

function* handleFetchMatterList({ payload }) {
  try {
    const response = yield call(matterApi.makeFetchCall, payload);
    yield put(storeMatterList({
      data: response.data,
      numberOfDocuments: response.meta.numberOfDocuments,
    }));
  } catch (error) {
    yield put(fetchMatterListError(error.toString()));
  }
}

function* handleFetchMatterDetails({ payload }) {
  try {
    const response = yield call(matterApi.makeFetchCall, payload);
    yield put(storeMatterDetails(response.title, response.tasks));
  } catch (error) {
    yield put(fetchMatterItemError(error.toString()));
  }
}

function* watchFetchMatterList() {
  yield takeLeading(MATTER.FETCH_LIST.REQUEST, handleFetchMatterList);
}

function* watchFetchMatterDetails() {
  yield takeLeading(MATTER.FETCH_ITEM.REQUEST, handleFetchMatterDetails);
}

const matterSagas = [watchFetchMatterList(), watchFetchMatterDetails()];

export default matterSagas;
