/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  name: "",
  data: {},
};

/*
 * Reducers
 * ******** */
export function MeteoReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_APIMETEO_DATA:
      return { ...state, data: action.payload };
      default:
        return state;
  }
}

/*
 * Getters
 * ******* */
