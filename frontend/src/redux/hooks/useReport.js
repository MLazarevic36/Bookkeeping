import { useDispatch, useSelector } from "react-redux";
import { generateAnalyticCardReport, generateCreditAccountsReport } from "../reducers/reportReducer";

export default function useReport() {
	
	const dispatch = useDispatch();
	const analyticCard = useSelector((state) => state.report.analyticCard);
	const accounts = useSelector((state) => state.report.accounts);
	const message = useSelector((state) => state.report.message);
	const loading = useSelector((state) => state.report.loading);

	const generateACReport = async (payload) => {
		return dispatch(generateAnalyticCardReport(payload));
	}

	const generateCAReport = async (payload) => {
		return dispatch(generateCreditAccountsReport(payload));
	}

	return {
		message,
		loading,
		analyticCard,
		generateACReport,
		generateCAReport,
		accounts

	};
}
