/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  data: {},
  dataAll: {},
};

/*
 * Reducers
 * ******** */
export function MeteoReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_APIMETEO_CURRENT_DATA:
      return { ...state, data: action.payload };
      case Actions.GET_APIMETEO_ALL_DATA:
        return { ...state, dataAll: action.payload };
      default:
        return state;
  }
}

/*
 * Getters
 * ******* */
