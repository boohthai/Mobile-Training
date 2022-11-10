// src/redux/store.js
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { FavListReducer } from "./FavSlice";
import { logInReducer } from "./LogInSlice";


const rootReducer = combineReducers({
  cart: cartReducer,
  favlist: FavListReducer,
  login: logInReducer,
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
})
})
