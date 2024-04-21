import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  report: [],
  loggedInUser: null,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    report(state, action) {
      state.report.push(action.payload);
    },
  },
});

export const { report } = reportSlice.actions;

const persistConfig = {
  key: "report",
  storage,
};

export default persistReducer(persistConfig, reportSlice.reducer);
