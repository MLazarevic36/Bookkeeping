import { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import ContoPlanTable from "../components/tables/ContoPlanTable";
import useConto from "../redux/hooks/useConto";

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

	return ( 
		<Layout>
			<ContoPlanTable data={contos} pagination={pagination}/>
		</Layout>
	)
}

export default ContoPlanPage
