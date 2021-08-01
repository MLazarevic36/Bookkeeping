import { loginURL } from "../api"
import { createAction, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { serverErrorMessage, wrongCredentialsMessage } from "../../components/utils/strings"

const START_REQUEST = createAction("USER/START_REQUEST")
const LOGIN_SUCCESS = createAction("USER/LOGIN_SUCCESS")
const REQUEST_FAIL = createAction("USER/REQUEST_FAIL")
const REQUEST_SUCCESS = createAction("USER/UPDATE_PROFILE")
const LOGOUT = createAction("USER/LOGOUT")
const CLEAN_MESSAGE = createAction("USER/CLEAN_MESSAGE")

export const login = (data) => async (dispatch) => {
	dispatch(START_REQUEST())
	return axios.post(loginURL, data)
	.then(res => handleResponse(res, dispatch, LOGIN_SUCCESS, REQUEST_FAIL))
}

export const logout = () => async (dispatch) => {
    dispatch(LOGOUT())
}

export const cleanMessage = () => async (dispatch) => {
    return dispatch(CLEAN_MESSAGE())
}

const handleResponse = (res, dispatch, success, fail) => {
	if(res !== undefined) {
		if(res.status >= 200 && res.status <= 299) {
			dispatch(success(res.data))
			return res
		}else if(res.response !== undefined){
			if(res.response.status === 401) {
				dispatch(fail(wrongCredentialsMessage))
				dispatch(CLEAN_MESSAGE())
			}else if(res.response.status >= 400 && res.response.status <= 499) {
				dispatch(fail(res.response.data.message))
				dispatch(CLEAN_MESSAGE())
			}else{
				dispatch(fail(serverErrorMessage))
				dispatch(CLEAN_MESSAGE())
			}
			return res.response
		}else{
			dispatch(fail(serverErrorMessage))
			dispatch(CLEAN_MESSAGE())
		}
	}else{
		dispatch(fail(serverErrorMessage))
		dispatch(CLEAN_MESSAGE())
	}
}

const initState = {
    token: "",
    loading: false,
    message: null,
}

export const userReducer = createReducer(initState, (builder) => {
    builder
        .addCase(START_REQUEST, (state, action) => {
            state.loading = true
            state.message = null
        })
        .addCase(LOGIN_SUCCESS, (state, action) => {
            state.loading = false
            state.token = action.payload.accessToken
        })
		.addCase(REQUEST_SUCCESS, (state, action) => {
            state.loading = false
            state.message = action.payload
        })
        .addCase(REQUEST_FAIL, (state, action) => {
            state.loading = false
            state.message = action.payload
        })
        .addCase(LOGOUT, (state, action) => {
            state.loading = false
        })
        .addCase(CLEAN_MESSAGE, (state, action) => {
            state.message = null
        })
})