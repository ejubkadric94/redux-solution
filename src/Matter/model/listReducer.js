import { AREAS_OF_LAW } from 'Matter/enums';
import { MATTER, SET_AREA_OF_LAW, SET_PAGE } from './constants';

const initialState = {
  areaOfLaw: AREAS_OF_LAW.ALL.value,
  numberOfDocuments: 0,
  pageNumber: 1,
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MATTER.FETCH_LIST.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        numberOfDocuments: action.payload.numberOfDocuments,
        loading: false,
      };
    case MATTER.FETCH_LIST.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case MATTER.FETCH_LIST.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_AREA_OF_LAW:
      return {
        ...state,
        areaOfLaw: action.payload,
        pageNumber: 1,
      };
    case SET_PAGE:
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
}
