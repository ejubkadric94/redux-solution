import _ from 'lodash';
import { FETCH_STATE } from './constants';

export const selectState = (state) => _.get(state, 'matter');

export const selectMatterById = _.curry((matterId, state) =>
  _.chain(state).thru(selectState).get(matterId).value()
);

export const getAreaOfLaw = (state) => state.matterList.areaOfLaw;

export const getMattersList = (state) => state.matterList.data;

export const getPageNumber = (state) => state.matterList.pageNumber;

export const getTotalNumberOfDocuments = (state) => state.matterList.numberOfDocuments;

export const getMattersListDisplayState = (state) => {
  const { loading, error, data } = state.matterList;

  if (!!data && !loading && !error) {
    return FETCH_STATE.SUCCESS;
  } else if (error) {
    return FETCH_STATE.ERROR;
  }
  return FETCH_STATE.LOADING;
};

export const getMattersListError = (state) => state.matterList.error;

export const getMatterDetails = (state) => state.matterDetails;

export const getMatterDetailsDisplayState = (state) => {
  const { loading, error, tasks } = state.matterDetails;

  if (!!tasks && !loading && !error) {
    return FETCH_STATE.SUCCESS;
  } else if (error) {
    return FETCH_STATE.ERROR;
  }
  return FETCH_STATE.LOADING;
};

export const getMatterDetailsError = (state) => state.matterDetails.error;