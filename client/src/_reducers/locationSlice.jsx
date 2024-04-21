
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
	selectedLocation: "Lucena City",
};

const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		setLocation(state, action) {
			state.selectedLocation = action.payload;
		},
	},
});

export const { setLocation } = locationSlice.actions;

const persistConfig = {
	key: "location",
	storage,
};

export default persistReducer(persistConfig, locationSlice.reducer);
