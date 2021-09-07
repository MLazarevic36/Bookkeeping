import { useDispatch, useSelector } from "react-redux";
import { addAccount, creditAccount, fetchAccountsPage } from "../reducers/accountReducer";
import { fetchMainBookPage } from "../reducers/mainBookReducer";

export default function useMainBook() {
	
	const dispatch = useDispatch();
	const analyticCards = useSelector((state) => state.mainBook.analyticCards);
	const message = useSelector((state) => state.mainBook.message);
	const loading = useSelector((state) => state.mainBook.loading);
	const pagination = useSelector((state) => state.mainBook.pagination);

	const fetchPage = async (pageNumber, pageSize, companyId) => {
		dispatch(fetchMainBookPage(pageNumber, pageSize, companyId));
	}

	return {
		message,
		loading,
		analyticCards,
		pagination,
		fetchPage,
	};
}
