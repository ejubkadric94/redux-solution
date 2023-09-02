import { call, put, takeLeading } from 'redux-saga/effects';
import { fetchMatterListError, storeMatterList } from './actions';
import { matterApi } from './api';
import { MATTER } from './constants';

function* handleFetchMatterList({ payload }) {
  try {
    const response = yield call(matterApi.fetchMatterList, payload);
    yield put(storeMatterList({
      data: response.data,
      numberOfDocuments: response.meta.numberOfDocuments,
    }));
  } catch (error) {
    yield put(fetchMatterListError(error.toString()));
  }
}

function* watchFetchMatterList() {
  yield takeLeading(MATTER.FETCH_LIST.REQUEST, handleFetchMatterList);
}

const matterSagas = [watchFetchMatterList()];

export default matterSagas;
