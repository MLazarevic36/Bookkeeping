import { useDispatch, useSelector } from "react-redux";
import { fetchContosPageByContoPlan } from "../reducers/contoReducer";
import { login, logout, cleanMessage } from "../reducers/userReducer";

export default function useConto() {
	
	const dispatch = useDispatch();
	const contos = useSelector((state) => state.conto.contos);
	const message = useSelector((state) => state.conto.message);
	const loading = useSelector((state) => state.conto.loading);
	const pagination = useSelector((state) => state.conto.pagination);
	

	const fetchContos = async (pageNumber, pageSize, contoPlanId) => {
		dispatch(fetchContosPageByContoPlan(pageNumber, pageSize, contoPlanId));
	};

	return {
		message,
		loading,
		contos,
		pagination,
		fetchContos
	};
}
