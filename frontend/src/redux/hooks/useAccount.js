import { useDispatch, useSelector } from "react-redux";
import { addAccount, creditAccount, deleteAccountItem, fetchAccountsPage, updateAccount } from "../reducers/accountReducer";

export default function useAccount() {
	
	const dispatch = useDispatch();
	const accounts = useSelector((state) => state.account.accounts);
	const message = useSelector((state) => state.account.message);
	const loading = useSelector((state) => state.account.loading);
	const pagination = useSelector((state) => state.account.pagination);

	const fetchPage = async (pageNumber, pageSize, companyId) => {
		dispatch(fetchAccountsPage(pageNumber, pageSize, companyId));
	}

	const add = async (payload) => {
		return dispatch(addAccount(payload))
	}

	const credit = async (id) => {
		return dispatch(creditAccount(id))
	}

	const update = async (payload) => {
		return dispatch(updateAccount(payload))
	}

	// const remove = async (id) => {
	// 	return dispatch(deleteConto(id))
	// }

	const deleteItem = async (id) => {
		return dispatch(deleteAccountItem(id))
	}

	return {
		message,
		loading,
		accounts,
		pagination,
		fetchPage,
		credit,
		add,
		update,
		deleteItem,
		// remove
	};
}
