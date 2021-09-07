import { useDispatch, useSelector } from "react-redux";
import { addConto, deleteConto, fetchContoClasses, fetchContosDropdown, fetchContosPage, updateConto } from "../reducers/contoReducer";

export default function useConto() {
	
	const dispatch = useDispatch();
	const contos = useSelector((state) => state.conto.contos);
	const message = useSelector((state) => state.conto.message);
	const loading = useSelector((state) => state.conto.loading);
	const pagination = useSelector((state) => state.conto.pagination);
	const contoClasses = useSelector((state) => state.conto.contoClasses)
	const dropdown = useSelector((state) => state.conto.dropdown)

	const fetchPage = async (pageNumber, pageSize, companyId) => {
		dispatch(fetchContosPage(pageNumber, pageSize, companyId));
	}

	const fetchDropdown = async (companyId) => {
		dispatch(fetchContosDropdown(companyId));
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
		dropdown,
		pagination,
		contoClasses,
		fetchClasses,
		fetchPage,
		fetchDropdown,
		add,
		update,
		remove
	};
}
