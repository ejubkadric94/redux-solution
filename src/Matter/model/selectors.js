import _ from 'lodash';
import { FETCH_STATE } from './constants';

export const selectState = (state) => _.get(state, 'matter');

export const selectMatterById = _.curry((matterId, state) =>
  _.chain(state).thru(selectState).get(matterId).value()
);

export const getAreaOfLaw = (state) => state.matter.areaOfLaw;

export const getMattersList = (state) => state.matter.data;

export const getPageNumber = (state) => state.matter.pageNumber;

export const getTotalNumberOfDocuments = (state) => state.matter.numberOfDocuments;

export const getMattersListDisplayState = (state) => {
  const { loading, error, data } = state.matter;

  if (!!data && !loading && !error) {
    return FETCH_STATE.SUCCESS;
  } else if (error) {
    return FETCH_STATE.ERROR;
  }
  return FETCH_STATE.LOADING;
};

export const getMattersListError = (state) => state.matter.error;

// export const getShouldFetchMattersList = (state) => {
//   const { loading, data } = state.matter;
//   return !loading && !data && ;
// };