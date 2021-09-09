import { accountReportURL, mainBookPageURL, reportAnalyticCardURL } from "../api"
import { createAction, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import {
	serverErrorMessage,
} from "../../utils/strings"

const START_REQUEST = createAction("REPORT/START_REQUEST")
const REQUEST_FAIL = createAction("REPORT/REQUEST_FAIL")
const REQUEST_SUCCESS_AC = createAction("REPORT/REQUEST_SUCCESS_AC")
const REQUEST_SUCCESS_CA = createAction("REPORT/REQUEST_SUCCESS_CA")
const CLEAN_MESSAGE = createAction("REPORT/CLEAN_MESSAGE")

export const generateAnalyticCardReport = (payload) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.post(reportAnalyticCardURL, payload)
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS_AC, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const generateCreditAccountsReport = (companyId) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(accountReportURL(companyId))
		.then((res) => handleResponse(res, dispatch, REQUEST_SUCCESS_CA, REQUEST_FAIL))
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
	analyticCard: null,
	accounts: [],
	message: null,
	loading: false
};

export const reportReducer = createReducer(initState, (builder) => {
	builder
		.addCase(START_REQUEST, (state, action) => {
			state.loading = true
			state.message = null
		})
		.addCase(REQUEST_SUCCESS_AC, (state, action) => {
			state.loading = false
			state.analyticCard = action.payload
		})
		.addCase(REQUEST_SUCCESS_CA, (state, action) => {
			state.loading = false
			state.accounts = action.payload
		})
		.addCase(REQUEST_FAIL, (state, action) => {
			state.loading = false
			state.message = action.payload
		})
		.addCase(CLEAN_MESSAGE, (state, action) => {
			state.message = null
		});
});
