import { useDispatch, useSelector } from "react-redux";
import { addAccount, cancelAccount, creditAccount, deleteAccount, deleteAccountItem, fetchAccountsDropdown, fetchAccountsPage, fetchOneAccount, updateAccount } from "../reducers/accountReducer";

export default function useAccount() {
	
	const dispatch = useDispatch();
	const accounts = useSelector((state) => state.account.accounts);
	const message = useSelector((state) => state.account.message);
	const loading = useSelector((state) => state.account.loading);
	const pagination = useSelector((state) => state.account.pagination);
	const dropdown = useSelector((state) => state.account.dropdown)
	const detail = useSelector((state) => state.account.detail)

	const fetchPage = async (pageNumber, pageSize, companyId) => {
		dispatch(fetchAccountsPage(pageNumber, pageSize, companyId));
	}

	const fetchDropdown = async (companyId) => {
		dispatch(fetchAccountsDropdown(companyId));
	}

	const fetchOne = async (accountId) => {
		return dispatch(fetchOneAccount(accountId));
	}

	const add = async (payload) => {
		return dispatch(addAccount(payload))
	}

	const credit = async (id) => {
		return dispatch(creditAccount(id))
	}

	const cancel = async (id) => {
		return dispatch(cancelAccount(id))
	}

	const update = async (payload) => {
		return dispatch(updateAccount(payload))
	}

	const remove = async (id) => {
		return dispatch(deleteAccount(id))
	}

	const deleteItem = async (id) => {
		return dispatch(deleteAccountItem(id))
	}

	return {
		message,
		loading,
		accounts,
		pagination,
		dropdown,
		detail,
		fetchDropdown,
		fetchPage,
		fetchOne,
		credit,
		cancel,
		add,
		update,
		deleteItem,
		remove
	};
}
