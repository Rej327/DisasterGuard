import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
	notifications: [],
	loggedInUser: null,
};

const notificationsSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {
		notifications(state, action) {
			state.notifications.push(action.payload);
		},
	},
});

export const { notifications } = notificationsSlice.actions;

const persistConfig = {
	key: "notifications",
	storage,
};

export default persistReducer(persistConfig, notificationsSlice.reducer);
