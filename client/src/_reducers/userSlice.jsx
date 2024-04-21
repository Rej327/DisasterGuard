import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
	users: [],
	loggedInUser: null,
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		register(state, action) {
			state.users.push(action.payload);
		},
		login(state, action) {
			const { email, password } = action.payload;
			const matchedUser = state.users.find(
				(user) => user.email === email && user.password === password
			);

			if (matchedUser) {
				state.loggedInUser = matchedUser;
			} else {
				state.loggedInUser = null;
			}
		},
		logout(state) {
			state.loggedInUser = null;
		},
	},
});

export const { register, login, logout } = userSlice.actions;

const persistConfig = {
	key: "users",
	storage,
};

export default persistReducer(persistConfig, userSlice.reducer);
