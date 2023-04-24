import { configureStore } from "@reduxjs/toolkit";
import { innoloftApi } from "../api/innoloftApi";
import usersReducer from "./reducers/usersReducer";
import productReducer from "./reducers/productReducer";

export default configureStore({
  reducer: {
    [innoloftApi.reducerPath]: innoloftApi.reducer,
    product: productReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(innoloftApi.middleware),
});
