import { useDispatch, useSelector } from "react-redux";
import { generateAnalyticCardReport, generateBrutoBalanceReport, generateCreditAccountsReport } from "../reducers/reportReducer";

export default function useReport() {
	
	const dispatch = useDispatch();
	const analyticCard = useSelector((state) => state.report.analyticCard);
	const accounts = useSelector((state) => state.report.accounts);
	const bruto = useSelector((state) => state.report.bruto);
	const message = useSelector((state) => state.report.message);
	const loading = useSelector((state) => state.report.loading);

	const generateACReport = async (payload) => {
		return dispatch(generateAnalyticCardReport(payload));
	}

	const generateCAReport = async (payload) => {
		return dispatch(generateCreditAccountsReport(payload));
	}

	const generateBBReport = async (payload) => {
		return dispatch(generateBrutoBalanceReport(payload));
	}

	return {
		message,
		loading,
		analyticCard,
		bruto,
		generateACReport,
		generateCAReport,
		generateBBReport,
		accounts

	};
}
