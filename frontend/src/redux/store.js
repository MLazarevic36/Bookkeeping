import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { accountReducer } from "./reducers/accountReducer";
import { companyReducer } from "./reducers/companyReducer";
import { contoReducer } from "./reducers/contoReducer";
import { formReducer } from "./reducers/formReducer";
import { mainBookReducer } from "./reducers/mainBookReducer";
import { reportReducer } from "./reducers/reportReducer";
import { userReducer } from "./reducers/userReducer";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	user: userReducer,
	conto: contoReducer,
	form: formReducer,
	company: companyReducer,
	account: accountReducer,
	mainBook: mainBookReducer,
	report: reportReducer
});

const rootReducer = (state, action) => {
	if (action.type === "USER/LOGOUT") {
		state = undefined;
		localStorage.removeItem("persist:root");
	}
	return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

export default store;
