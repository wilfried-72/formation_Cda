import { combineReducers } from "redux";

// imporation des fichers reducer ci-dessous
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";

// ici on met tous les reducer qui seront implementer dans notre code
export default combineReducers({
postReducer,
userReducer,
})