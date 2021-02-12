import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../contacts/contactsReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["email", "idToken", "refreshToken", "isAuth"],
  // blackList: ["isLoading", "error"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
});

export default rootReducer;

// email: "",
//   idToken: "",
//   isAuth: false,
//   refreshToken: "",
//   isLoading: false,
//   error: "",
