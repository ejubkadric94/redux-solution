import { MATTER, SET_AREA_OF_LAW, SET_PAGE } from './constants';

export const fetchMatterList = (pageNumber, areaOfLaw) => ({
  type: MATTER.FETCH_LIST.REQUEST,
  payload: { pageNumber, areaOfLaw },
});

export const fetchMatterListError = (error) => ({
  type: MATTER.FETCH_LIST.ERROR,
  payload: error,
});

export const storeMatterList = (matterList) => ({
  type: MATTER.FETCH_LIST.SUCCESS,
  payload: matterList,
});

export const setAreaOfLaw = (areaOfLaw) => ({
  type: SET_AREA_OF_LAW,
  payload: areaOfLaw,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const fetchMatterDetails = (id) => ({
  type: MATTER.FETCH_ITEM.REQUEST,
  payload: id,
});

export const fetchMatterItemError = (error) => ({
  type: MATTER.FETCH_ITEM.ERROR,
  payload: error,
});

export const storeMatterDetails = (title, tasks) => ({
  type: MATTER.FETCH_ITEM.SUCCESS,
  payload: { title, tasks },
});
