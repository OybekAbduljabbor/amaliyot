import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reAdmin } from "./Admin";
import { userApi } from "./Api/User";

const reducer = combineReducers({
  admin: reAdmin,
  [userApi.reducerPath]: userApi.reducer,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(userApi.middleware),
});
