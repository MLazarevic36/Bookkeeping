import { useDispatch, useSelector } from "react-redux";
import { addConto, deleteConto, fetchContoClasses, fetchContosPageByContoPlan, updateConto } from "../reducers/contoReducer";

export default function useConto() {
	
	const dispatch = useDispatch();
	const contos = useSelector((state) => state.conto.contos);
	const message = useSelector((state) => state.conto.message);
	const loading = useSelector((state) => state.conto.loading);
	const pagination = useSelector((state) => state.conto.pagination);
	const contoClasses = useSelector((state) => state.conto.contoClasses)
	
	const fetchContos = async (pageNumber, pageSize, contoPlanId) => {
		dispatch(fetchContosPageByContoPlan(pageNumber, pageSize, contoPlanId));
	}

	const fetchClasses = async () => {
		dispatch(fetchContoClasses())
	}

	const add = async (payload) => {
		return dispatch(addConto(payload))
	}

	const update = async (payload) => {
		return dispatch(updateConto(payload))
	}

	const remove = async (id) => {
		return dispatch(deleteConto(id))
	}

	return {
		message,
		loading,
		contos,
		pagination,
		contoClasses,
		fetchContos,
		fetchClasses,
		add,
		update,
		remove
	};
}
