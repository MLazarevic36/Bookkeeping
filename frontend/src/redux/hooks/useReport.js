import { useDispatch, useSelector } from "react-redux";
import { addAccount, creditAccount, fetchAccountsPage } from "../reducers/accountReducer";
import { fetchMainBookPage } from "../reducers/mainBookReducer";
import { generateAnalyticCardReport } from "../reducers/reportReducer";

export default function useReport() {
	
	const dispatch = useDispatch();
	const analyticCard = useSelector((state) => state.report.analyticCard);
	const message = useSelector((state) => state.report.message);
	const loading = useSelector((state) => state.report.loading);

	const generateACReport = async (payload) => {
		return dispatch(generateAnalyticCardReport(payload));
	}

	return {
		message,
		loading,
		analyticCard,
		generateACReport,
	};
}
