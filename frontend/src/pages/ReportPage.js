import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Layout from "../components/layouts/Layout";
import AccountDetail from "../components/reports/AccountDetail";
import AnalyticCardReport from "../components/reports/AnalyticCardReport";
import SelectDropdown from "../components/SelectDropdown";
import useAccount from "../redux/hooks/useAccount";
import useCompany from "../redux/hooks/useCompany";
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
	const hookCompany = useCompany()

	const [selectedReport, setSelectedReport] = useState(null)
	const [selectedConto, setSelectedConto] = useState(null)
	const [selectedCompany, setSelectedCompany] = useState(null)
	const [selectedAccount, setSelectedAccount] = useState(null)
	const [contoOptions, setContoOptions] = useState([])
	const [accountOptions, setAccountOptions] = useState([])
	const [companyOptions, setCompanyOptions] = useState([])
	const [analyticCardResponse, setAnalyticCardResponse] = useState(null)
	const [detailAccount, setDetailAccount] = useState(null)
	const [accounts, setAccounts] = useState(null)

	useEffect(() => {
		// hookAccount.fetchDropdown(hookUser.employee.company)
		// hookCompany.fetchD(hookUser.employee.company)
		// hookConto.fetchDropdown(hookUser.employee.company)
		hookCompany.fetchAD()
		hookCompany.fetchC()
	}, [])

	useEffect(() => {
		if(hookConto.dropdown.length > 0) {
			makeSelectOptionsConto(hookConto.dropdown, setContoOptions)
		}else{
			setContoOptions([])
		}

		if(hookAccount.dropdown.length > 0) {
			const options = []
			hookAccount.dropdown.forEach(ele => options.push({label: ele.id, value: ele.id}))
			setAccountOptions(options)
		}

		if(hookCompany.dropdown.length > 0) {
			const options = []
			hookCompany.dropdown.forEach(ele => options.push({label: ele.name, value: ele.id}))
			setCompanyOptions(options)
		}else{
			setCompanyOptions(null)
		}

	}, [hookConto.dropdown, hookAccount.dropdown, hookCompany.dropdown])

	useEffect(() => {
		if(selectedCompany) {
			hookConto.fetchDropdown(selectedCompany)
		}

	}, [selectedCompany])

	const handleSubmit = () => {
		if(selectedReport === reportAnalyticCard) {
			const payload = {
				contoId: selectedConto
			}

			hook.generateACReport(payload).then((res) => {
				if(res !== undefined && res.status === 200) {
					setDetailAccount(null)
					setAnalyticCardResponse(res.data)
				}
			})
		}else if(selectedReport === reportCreditAccount) {
			hook.generateCAReport(selectedCompany).then((res) => {
				if(res !== undefined && res.status === 200) {
					setAnalyticCardResponse(null)
					setAccounts(res.data)
				}
			})
		}
	}

	return (
		<Layout>
			{console.log(selectedReport)}
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
				<>
					<Box w="300px">
						<FormLabel color="mc_medium" mb="10px">
							{"PREDUZECE"}
						</FormLabel>
						<SelectDropdown
							options={companyOptions}
							onChange={(val) => setSelectedCompany(val.value)}
						/>
					</Box>
					{
						selectedCompany && 
						<Box w="600px">
							<FormLabel color="mc_medium" mb="10px">
								{"KONTO"}
							</FormLabel>
							<SelectDropdown
								options={contoOptions}
								onChange={(val) => setSelectedConto(val.value)}
							/>
						</Box>
						
					}
	
				</>
				)
			}
			{
				selectedReport === reportCreditAccount && (
				<Box w="300px">
					<FormLabel color="mc_medium" mb="10px">
						{"PREDUZECE"}
					</FormLabel>
					<SelectDropdown
						options={companyOptions}
						onChange={(val) => setSelectedCompany(val.value)}
					/>
				</Box>
				)
			}

			<CustomButton type="update" text="GENERISI" onClick={() => handleSubmit()}/>
		</Flex>
		<Flex justify="center" align="center" h="370px">
			{
				analyticCardResponse ? 
					<AnalyticCardReport response={analyticCardResponse} /> :
				accounts ?
				<Flex direction="column" gridGap="150px" h={"100%"} mt="50px"> 
					{accounts.map((ele, i) => {
						return <AccountDetail response={ele} /> 
					})}
				</Flex>
				: null
			}
		</Flex>

		{/* {barGraphData && 
			<BarChart data={barGraphData}/>
		} */}
	</Layout>
	)
}

export default ReportPage