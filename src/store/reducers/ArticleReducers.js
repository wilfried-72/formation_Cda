/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: '',
  newsData: [],
  news: {
    author: "",
    content: "",
    date: "",
  }
};

/*
 * Reducers
 * ******** */
export function ArticleReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NEWS_DATA:
      return { ...state, newsData: action.payload };
    case Actions.ADD_NEWS_DATA:
      return { ...state, flash: action.payload };
    default:
      return state;
  }
}

/*
 * Getters
 * ******* */
