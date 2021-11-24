/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_NEWS_DATA, ADD_NEWS_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get News
export const getNews = () => {
  console.log('getNews')
  return (dispatch) => {
    return axios
      .get("http://localhost:3003/articles")
      .then((res) => {
        console.log("getNews:", res);
        dispatch({ type: GET_NEWS_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Add News
export const addNews = (data) => {
  console.log('addNews', data)
  return (dispatch) => {
    return axios
      .post("http://localhost:3003/articles", data)
      .then((res) => {
        console.log("postNews", res.data);
        dispatch({ type: ADD_NEWS_DATA, payload: res.data.message });
      })
      .catch((err) => console.log(err));
  };
};
