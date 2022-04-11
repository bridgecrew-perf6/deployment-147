import { combineReducers, configureStore } from "@reduxjs/toolkit";
import passengerSlice from "./passengerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  passenger: passengerSlice,
});

const persisConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persisConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
// agar data tidak hilang ketika di refresh
const persistor = persistStore(store);

export { store, persistor };
