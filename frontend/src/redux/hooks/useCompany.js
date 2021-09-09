import { useDispatch, useSelector } from "react-redux";
import { fetchAllDivisions, fetchCompanies, fetchDivisions, fetchPartners } from "../reducers/companyReducer";

export default function useCompany() {
	
	const dispatch = useDispatch();
	const partners = useSelector((state) => state.company.partners);
	const message = useSelector((state) => state.company.message);
	const loading = useSelector((state) => state.company.loading);
	const divisions = useSelector((state) => state.company.divisions)
	const dropdown = useSelector((state) => state.company.dropdown)
	
	const fetchP = async (id) => {
		dispatch(fetchPartners(id))
	}

	const fetchD = async (id) => {
		dispatch(fetchDivisions(id))
	}

	const fetchAD = async () => {
		dispatch(fetchAllDivisions())
	}

	const fetchC = async () => {
		dispatch(fetchCompanies())
	}

	return {
		fetchC,
		message,
		dropdown,
		loading,
		partners,
		divisions,
		fetchD,
		fetchAD,
		fetchP
	};
}
