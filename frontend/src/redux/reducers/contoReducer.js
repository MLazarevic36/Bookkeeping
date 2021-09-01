import { contoPageURL, loginURL } from "../api";
import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import {
	serverErrorMessage,
	wrongCredentialsMessage,
} from "../../utils/strings";

const START_REQUEST = createAction("CONTO/START_REQUEST");
const FETCH_SUCCESS = createAction("CONTO/FETCH_SUCCESS");
const REQUEST_FAIL = createAction("CONTO/REQUEST_FAIL");
const REQUEST_SUCCESS = createAction("CONTO/REQUEST_SUCCESS");
const CLEAN_MESSAGE = createAction("CONTO/CLEAN_MESSAGE");

export const fetchContosPageByContoPlan = (pageNumber, pageSize, contoPlanId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(contoPageURL(pageNumber, pageSize, contoPlanId))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
};

const handleResponse = (res, dispatch, success, fail) => {
	if (res !== undefined) {
		if (res.status >= 200 && res.status <= 299) {
			dispatch(success(res.data));
			return res;
		} else if (res.response !== undefined) {
			if (res.response.status === 401) {
				dispatch(fail(wrongCredentialsMessage));
				dispatch(CLEAN_MESSAGE());
			} else if (res.response.status >= 400 && res.response.status <= 499) {
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
	contoClasses: [],
	contos: [],
	pagination: null,
	message: null,
};

export const contoReducer = createReducer(initState, (builder) => {
	builder
		.addCase(START_REQUEST, (state, action) => {
			state.loading = true;
			state.message = null;
		})
		.addCase(FETCH_SUCCESS, (state, action) => {
			const pagination = {
				page: action.payload.page,
				size: action.payload.size,
				totalElements: action.payload.totalElements,
				totalPages: action.payload.totalPages,
			}
			state.loading = false;
			state.contos = action.payload.content;
			state.pagination = pagination
		})
		.addCase(REQUEST_SUCCESS, (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase(REQUEST_FAIL, (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase(CLEAN_MESSAGE, (state, action) => {
			state.message = null;
		});
});
