import { contoPageURL, contoClassURL, contoURL, contoDeleteURL } from "../api"
import { createAction, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import {
	serverErrorMessage,
	wrongCredentialsMessage,
} from "../../utils/strings"

const START_REQUEST = createAction("CONTO/START_REQUEST")
const FETCH_SUCCESS = createAction("CONTO/FETCH_SUCCESS")
const REQUEST_FAIL = createAction("CONTO/REQUEST_FAIL")
const REQUEST_SUCCESS = createAction("CONTO/REQUEST_SUCCESS")
const CLEAN_MESSAGE = createAction("CONTO/CLEAN_MESSAGE")
const FETCH_SUCCESS_CLASSES = createAction("CONTO/CLASS/FETCH_SUCCESS")

export const fetchContosPageByContoPlan = (pageNumber, pageSize, contoPlanId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(contoPageURL(pageNumber, pageSize, contoPlanId))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}


export const fetchContoClasses = () => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(contoClassURL)
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS_CLASSES, REQUEST_FAIL))
		.catch(error => console.log(error))

}

export const addConto = (payload) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.post(contoURL, payload)
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const updateConto = (payload) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.put(contoURL, payload)
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const deleteConto = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.delete(contoDeleteURL(id))
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

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
	loading: false
};

export const contoReducer = createReducer(initState, (builder) => {
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
			state.contos = action.payload.content
			state.pagination = pagination
		})
		.addCase(FETCH_SUCCESS_CLASSES, (state, action) => {
			state.loading = false
			state.contoClasses = action.payload
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
