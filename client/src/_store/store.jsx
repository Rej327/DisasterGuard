import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../_reducers/locationSlice";
import { persistStore } from "redux-persist";
import userSlice from "../_reducers/userSlice";
import notificationsSlice from "../_reducers/notificationsSlice";
import reportSlice from "../_reducers/reportSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
    user: userSlice,
    forum: notificationsSlice,
    report: reportSlice,
  },
});

export const persistor = persistStore(store);
