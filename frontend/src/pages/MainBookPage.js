import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import MainBookTable from "../components/tables/MainBookTable";
import useConto from "../redux/hooks/useConto";
import useMainBook from "../redux/hooks/useMainBook";
import useUser from "../redux/hooks/useUser";
import { defaultSize } from "../utils/strings";

const MainBookPage = () => {

	const hookUser = useUser()
	const hook = useMainBook()
	const hookConto = useConto()

	const [analyticCards, setAnalyticCards] = useState([])

	useEffect(() => {
		hook.fetchPage(0, defaultSize, hookUser.employee.company)
		hookConto.fetchDropdown(hookUser.employee.company)
	}, [])  //eslint-disable-line

	useEffect(() => {
		if(hook.analyticCards.length > 0) {
			const currentData = [...hook.analyticCards]
			const newData = []
			currentData.map((ele) => {
				let newObj = {}
				let owesTotal = 0;
				let requiresTotal = 0;
		
				ele.financialChanges.forEach((el) => {
					if(el.financialChangeDirection === "POSITIVE") {
						requiresTotal = requiresTotal + el.amount
					}else{
						owesTotal = owesTotal + el.amount
					}
				})
		
				newObj["id"] = ele.id
				newObj["conto"] = ele.conto
				newObj["financialChanges"] = ele.financialChanges
				newObj["mainBook"] = ele.mainBook
				newObj["owesAmountTotal"] = owesTotal
				newObj["requiresAmountTotal"] = requiresTotal
				newObj["saldo"] = owesTotal - requiresTotal
				newData.push(newObj)
			})
			setAnalyticCards(newData)
		}
	}, [hook.analyticCards])
	

	return (
		<Layout>
			
			<MainBookTable data={analyticCards}/>
			{/* <CustomModal isOpen={isOpen} onClose={onClose} size={"full"} overlayClick={false}>

			</CustomModal> */}
		</Layout>
	)
};

export default MainBookPage;
