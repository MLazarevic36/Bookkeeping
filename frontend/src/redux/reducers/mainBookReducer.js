import { mainBookPageURL } from "../api"
import { createAction, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import {
	serverErrorMessage,
} from "../../utils/strings"

const START_REQUEST = createAction("MAIN_BOOK/START_REQUEST")
const FETCH_SUCCESS = createAction("MAIN_BOOK/FETCH_SUCCESS")
const REQUEST_FAIL = createAction("MAIN_BOOK/REQUEST_FAIL")
const REQUEST_SUCCESS = createAction("MAIN_BOOK/REQUEST_SUCCESS")
const CLEAN_MESSAGE = createAction("MAIN_BOOK/CLEAN_MESSAGE")

export const fetchMainBookPage = (pageNumber, pageSize, companyId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(mainBookPageURL(pageNumber, pageSize, companyId))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

const handleResponse = (res, dispatch, success, fail) => {
	if (res !== undefined) {
		if (res.status >= 200 && res.status <= 299) {
			dispatch(success(res.data));
			return res;
		} else if (res.response !== undefined) {
			if (res.response.status >= 400 && res.response.status <= 499) {
				dispatch(fail(res.response.data.message));
				dispatch(CLEAN_MESSAGE());
			} else {
				dispatch(fail(serverErrorMessage));
				dispatch(CLEAN_MESSAGE());
			}
			return res.response;
		} else {
			dispatch(fail(serverErrorMessage));
			dispatch(CLEAN_MESSAGE());
		}
	} else {
		dispatch(fail(serverErrorMessage));
		dispatch(CLEAN_MESSAGE());
	}
};

const initState = {
	analyticCards: [],
	pagination: null,
	message: null,
	loading: false
};

export const mainBookReducer = createReducer(initState, (builder) => {
	builder
		.addCase(START_REQUEST, (state, action) => {
			state.loading = true
			state.message = null
		})
		.addCase(FETCH_SUCCESS, (state, action) => {
			const pagination = {
				page: action.payload.page,
				size: action.payload.size,
				totalElements: action.payload.totalElements,
				totalPages: action.payload.totalPages,
			}
			state.loading = false
			state.analyticCards = action.payload.content
			state.pagination = pagination
		})
		.addCase(REQUEST_SUCCESS, (state, action) => {
			state.loading = false
			state.message = action.payload
		})
		.addCase(REQUEST_FAIL, (state, action) => {
			state.loading = false
			state.message = action.payload
		})
		.addCase(CLEAN_MESSAGE, (state, action) => {
			state.message = null
		});
});
