import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Layout from "../components/layouts/Layout";
import AnalyticCardReport from "../components/reports/AnalyticCardReport";
import SelectDropdown from "../components/SelectDropdown";
import useAccount from "../redux/hooks/useAccount";
import useConto from "../redux/hooks/useConto";
import useReport from "../redux/hooks/useReport";
import useUser from "../redux/hooks/useUser";
import { makeSelectOptionsConto } from "../utils/functions";
import { reportAnalyticCard, reportCreditAccount, reportOptions } from "../utils/strings";

const ReportPage = () => {

	const hook = useReport()
	const hookConto = useConto()
	const hookAccount = useAccount()
	const hookUser = useUser()

	const [selectedReport, setSelectedReport] = useState(null)
	const [selectedConto, setSelectedConto] = useState(null)
	const [selectedAccount, setSelectedAccount] = useState(null)
	const [contoOptions, setContoOptions] = useState([])
	const [accountOptions, setAccountOptions] = useState([])
	const [analyticCardResponse, setAnalyticCardResponse] = useState(null)

	useEffect(() => {
		hookAccount.fetchDropdown(hookUser.employee.company)
	}, [])

	useEffect(() => {
		if(hookConto.dropdown.length > 0) {
			makeSelectOptionsConto(hookConto.dropdown, setContoOptions)
		}

		if(hookAccount.dropdown.length > 0) {
			const options = []
			hookAccount.dropdown.forEach(ele => options.push({label: ele.id, value: ele.id}))
			setAccountOptions(options)
		}

	}, [hookConto.dropdown])

	const handleSubmit = () => {
		if(selectedReport === reportAnalyticCard) {
			const payload = {
				contoId: selectedConto
			}

			hook.generateACReport(payload).then((res) => {
				if(res !== undefined && res.status === 200) {
					setAnalyticCardResponse(res.data)
				}
			})
		}
	}

	return (
		<Layout>
		<Flex
			direction={["column", "column", "column", "row"]}
			w="80%"
			m="auto"
			gridGap="30px"
			justify="flex-start"
			alignItems={["center", "center", "center", "flex-end"]}
			mt="40px"
			ml="50px"
		>
			<Box w="370px">
				<FormLabel color="mc_medium" mb="10px">
					{"IZVESTAJ"}
				</FormLabel>
				<SelectDropdown
					options={reportOptions}
					onChange={(val) => setSelectedReport(val.value)}
				/>
			</Box>
			{
				selectedReport === reportAnalyticCard && (
				<Box w="600px">
					<FormLabel color="mc_medium" mb="10px">
						{"KONTO"}
					</FormLabel>
					<SelectDropdown
						options={contoOptions}
						onChange={(val) => setSelectedConto(val.value)}
					/>
				</Box>
				)
			}
			{
				selectedReport === reportCreditAccount && (
				<Box w="300px">
					<FormLabel color="mc_medium" mb="10px">
						{"BROJ NALOGA"}
					</FormLabel>
					<SelectDropdown
						options={accountOptions}
						onChange={(val) => setSelectedAccount(val.value)}
					/>
				</Box>
				)
			}

			<CustomButton type="update" text="GENERISI" onClick={() => handleSubmit()}/>
		</Flex>
		<Flex justify="center" align="center" h="370px">
			{
				analyticCardResponse && <AnalyticCardReport response={analyticCardResponse} />
			}
		</Flex>

		{/* {barGraphData && 
			<BarChart data={barGraphData}/>
		} */}
	</Layout>
	)
}

export default ReportPage