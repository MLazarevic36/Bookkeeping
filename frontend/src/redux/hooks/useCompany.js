import { useDispatch, useSelector } from "react-redux";
import { fetchDivisions, fetchPartners } from "../reducers/companyReducer";

export default function useCompany() {
	
	const dispatch = useDispatch();
	const partners = useSelector((state) => state.company.partners);
	const message = useSelector((state) => state.company.message);
	const loading = useSelector((state) => state.company.loading);
	const divisions = useSelector((state) => state.company.divisions)
	
	const fetchP = async (id) => {
		dispatch(fetchPartners(id))
	}

	const fetchD = async (id) => {
		dispatch(fetchDivisions(id))
	}

	return {
		message,
		loading,
		partners,
		divisions,
		fetchD,
		fetchP
	};
}
