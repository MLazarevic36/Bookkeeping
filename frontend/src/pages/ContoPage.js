import { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import ContoPlanTable from "../components/tables/ContoPlanTable";
import useConto from "../redux/hooks/useConto";
import { statusActive, statusInactive, typeAnalytic, typeSynthetic } from "../utils/strings";

const ContoPlanPage = () => {

	const hook = useConto()

	const [contos, setContos] = useState([])
	const [pagination, setPagination] = useState(null)
	

	useEffect(() => {
		hook.fetchContos(1, 1, 1)
	}, [])

	useEffect(() => {
		if(hook.contos.length > 0) {
			setContos(hook.contos)
		}

		if(hook.pagination) {
			setPagination(hook.pagination)
		}
	}, [hook.contos, hook.pagination])

	const typeOptions = [
		{label: "ANALITIČKI", value: typeAnalytic}, 
		{label: "SINTETIČKI", value: typeSynthetic}
	]

	const statusOptions = [
		{label: "AKTIVAN", value: statusActive},
		{label: "NEAKTIVAN", value: statusInactive}
	]

	const selectData = {
		typeOptions: typeOptions,
		statusOptions: statusOptions
	}

	return ( 
		<Layout>
			<ContoPlanTable data={contos} pagination={pagination} selectData={selectData}/>
		</Layout>
	)
}

export default ContoPlanPage
