import { accountDeleteURL, accountDropdownURL, accountItemDeleteURL, accountPageURL, accountSingleURL, accountURL, cancelAccountURL, creditAccountURL } from "../api"
import { createAction, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import {
	serverErrorMessage,
} from "../../utils/strings"

const START_REQUEST = createAction("ACCOUNT/START_REQUEST")
const FETCH_SUCCESS = createAction("ACCOUNT/FETCH_SUCCESS")
const FETCH_SUCCESS_DROPDOWN = createAction("ACCOUNT/FETCH_SUCCESS_DROPDOWN")
const FETCH_SUCCESS_DETAIL = createAction("ACCOUNT/FETCH_SUCCESS_DETAIL")
const REQUEST_FAIL = createAction("ACCOUNT/REQUEST_FAIL")
const REQUEST_SUCCESS = createAction("ACCOUNT/REQUEST_SUCCESS")
const CLEAN_MESSAGE = createAction("ACCOUNT/CLEAN_MESSAGE")

export const fetchAccountsPage = (pageNumber, pageSize, accountPlanId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(accountPageURL(pageNumber, pageSize, accountPlanId))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const fetchAccountsDropdown = (companyId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(accountDropdownURL(companyId))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS_DROPDOWN, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const fetchOneAccount = (accountId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(accountSingleURL(accountId))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS_DETAIL, REQUEST_FAIL))
		.catch(error => console.log(error))
}


export const addAccount = (payload) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.post(accountURL, payload)
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const cancelAccount = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.put(cancelAccountURL(id), {})
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const creditAccount = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.put(creditAccountURL(id), {})
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const updateAccount = (payload) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.put(accountURL, payload)
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const deleteAccountItem = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.delete(accountItemDeleteURL(id))
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const deleteAccount = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.delete(accountSingleURL(id))
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS, REQUEST_FAIL))
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
	accounts: [],
	dropdown: [],
	detail: null,
	pagination: null,
	message: null,
	loading: false
};

export const accountReducer = createReducer(initState, (builder) => {
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
			state.accounts = action.payload.content
			state.pagination = pagination
		})
		.addCase(FETCH_SUCCESS_DROPDOWN, (state, action) => {
			state.loading = false
			state.dropdown = action.payload
		})
		.addCase(FETCH_SUCCESS_DETAIL, (state, action) => {
			state.loading = false
			state.detail = action.payload
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
