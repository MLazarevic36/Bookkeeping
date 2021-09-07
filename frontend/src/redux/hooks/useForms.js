import { useDispatch, useSelector } from "react-redux";
import { addNewAccountItem, removeOneAccountItem, setAccountItemArray, updateOneAccountItem } from "../reducers/formReducer";


export default function useForms() {

	const dispatch = useDispatch();
	const accountItems = useSelector((state) => state.form.accountItems);

	const addItem = () => {
		const payload = {
			conto: null, 
			partner: null, 
			description: "", 
			owesAmount: 0.00, 
			requiresAmount: 0.00, 
			documentNumber: "", 
			documentDate: null, 
			currencyDate: null
		}
		dispatch(addNewAccountItem(payload))
	}

	const removeItem = (payload) => {
		dispatch(removeOneAccountItem(payload))
	}

	const updateItem = (index, property, value) => {
		const payload = {
			index: index,
			property: property,
			value: value
		}
		dispatch(updateOneAccountItem(payload))
	}

	const setItems = (payload) => {
		dispatch(setAccountItemArray(payload))
	}

	return {
		accountItems,
		addItem,
		removeItem,
		updateItem,
		setItems
	};
}