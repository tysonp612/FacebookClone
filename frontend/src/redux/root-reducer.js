import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./reducers/user/user.reducer";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
