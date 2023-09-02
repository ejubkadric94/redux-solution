import { MATTER } from './constants';

const initialState = {
  title: '',
  tasks: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MATTER.FETCH_ITEM.SUCCESS:
      return {
        ...state,
        tasks: action.payload.tasks,
        title: action.payload.title,
        loading: false,
      };
    case MATTER.FETCH_ITEM.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case MATTER.FETCH_ITEM.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
