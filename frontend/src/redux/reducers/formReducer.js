import { createAction, createReducer } from "@reduxjs/toolkit"

const ADD_ACCOUNT_ITEM = createAction("FORM/ADD_ACCOUNT_ITEM")
const UPDATE_ACCOUNT_ITEM = createAction("FORM/UPDATE_ACCOUNT_ITEM")
const REMOVE_ACCOUNT_ITEM = createAction("FORM/REMOVE_ACCOUNT_ITEM")
const SET_ACCOUNT_ITEMS = createAction("FORM/SET_ACCOUNT_ITEMS")

export const addNewAccountItem = (question) => async (dispatch) => {
	dispatch(ADD_ACCOUNT_ITEM(question))
}

export const updateOneAccountItem = (payload) => async (dispatch) => {
	dispatch(UPDATE_ACCOUNT_ITEM(payload))	
}

export const removeOneAccountItem = (index) => async (dispatch) => {
	dispatch(REMOVE_ACCOUNT_ITEM(index))	
}

export const setAccountItemArray = (index) => async (dispatch) => {
	dispatch(SET_ACCOUNT_ITEMS(index))	
}

const initState = {
	accountItems:  [
		{
			conto: null, 
			partner: null, 
			description: "", 
			owesAmount: 0.00, 
			requiresAmount: 0.00, 
			documentNumber: "", 
			documentDate: null, 
			currencyDate: null
		}
	],
};

export const formReducer = createReducer(initState, (builder) => {
	builder
		.addCase(ADD_ACCOUNT_ITEM, (state, action) => {
			state.accountItems.push(action.payload)
		})
		.addCase(REMOVE_ACCOUNT_ITEM, (state, action) => {
			state.accountItems = state.accountItems.filter((accountItem, i) => i !== action.payload)
		})
		.addCase(UPDATE_ACCOUNT_ITEM, (state, action) => {
			const {index, property, value} = action.payload;
			state.accountItems[index][property] = value;	
		})
		.addCase(SET_ACCOUNT_ITEMS, (state, action) => {
			state.accountItems = action.payload
		})
	})