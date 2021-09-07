import { companyURL, companyDivisionURL, companyPartnerURL } from "../api"
import { createAction, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import {
	serverErrorMessage,
} from "../../utils/strings"

const START_REQUEST = createAction("COMPANY/START_REQUEST")
const FETCH_SUCCESS_PARTNERS = createAction("COMPANY/PARTNERS/FETCH_SUCCESS")
const REQUEST_FAIL = createAction("COMPANY/REQUEST_FAIL")
const REQUEST_SUCCESS = createAction("COMPANY/REQUEST_SUCCESS")
const CLEAN_MESSAGE = createAction("COMPANY/CLEAN_MESSAGE")
const FETCH_SUCCESS_DIVISIONS = createAction("COMPANY/DIVISIONS/FETCH_SUCCESS")


export const fetchPartners = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(companyPartnerURL(id))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS_PARTNERS, REQUEST_FAIL))
		.catch(error => console.log(error))
}

export const fetchDivisions = (id) => async (dispatch) => {
	dispatch(START_REQUEST());
	return axios
		.get(companyDivisionURL(id))
		.then((res) => handleResponse(res, dispatch, FETCH_SUCCESS_DIVISIONS, REQUEST_FAIL))
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
	divisions: [],
	partners: [],
	message: null,
	loading: false
};

export const companyReducer = createReducer(initState, (builder) => {
	builder
		.addCase(START_REQUEST, (state, action) => {
			state.loading = true
			state.message = null
		})

		.addCase(FETCH_SUCCESS_PARTNERS, (state, action) => {
			state.loading = false
			state.partners = action.payload
		})

		.addCase(FETCH_SUCCESS_DIVISIONS, (state, action) => {
			state.loading = false
			state.divisions = action.payload
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
