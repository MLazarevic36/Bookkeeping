import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import DatePickerWrapper, { Calendar } from "../components/CustomDatePicker";
import Layout from "../components/layouts/Layout";
import AccountDetail from "../components/reports/AccountDetail";
import AnalyticCardReport from "../components/reports/AnalyticCardReport";
import ClassComp from "../components/reports/ClassComp";
import SelectDropdown from "../components/SelectDropdown";
import ContoPlanTable from "../components/tables/ContoPlanTable";
import useAccount from "../redux/hooks/useAccount";
import useCompany from "../redux/hooks/useCompany";
import useConto from "../redux/hooks/useConto";
import useReport from "../redux/hooks/useReport";
import useUser from "../redux/hooks/useUser";
import { dateFormatter, makeSelectOptionsConto, priceFormatter } from "../utils/functions";
import { defaultSize, reportAnalyticCard, reportContoPlan, reportCreditAccount, reportGrossBalanceSheet, reportOptions } from "../utils/strings";

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
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)
	const [classes, setClasses] = useState(null)
	const [contoPlan, setContoPlan] = useState(null)
	const [pagination, setPagination] = useState(null)

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
					setClasses(null)
					setContoPlan(null)
					setPagination(null)
					setAnalyticCardResponse(res.data)
				}
			})
		}else if(selectedReport === reportCreditAccount) {
			hook.generateCAReport(selectedCompany).then((res) => {
				if(res !== undefined && res.status === 200) {
					setAnalyticCardResponse(null)
					setClasses(null)
					setContoPlan(null)
					setPagination(null)
					setAccounts(res.data)
				}
			})
		}else if(selectedReport === reportGrossBalanceSheet) {
			const payload = {
				companyId: selectedCompany,
				start: startDate,
				end: endDate
			}

			hook.generateBBReport(payload).then((res) => {
				if(res !== undefined && res.status === 200) {
					setDetailAccount(null)
					setAnalyticCardResponse(null)
					setContoPlan(null)
					setPagination(null)
					setClasses(res.data.classes)
				}
			})
		}else if(selectedReport === reportContoPlan) {
			hookConto.fetchPage(0, defaultSize, selectedCompany).then((res) => {
				if(res !== undefined && res.status === 200) {
					setDetailAccount(null)
					setAnalyticCardResponse(null)
					setClasses(null)
					setContoPlan(res.data.content)
					const pagination = {
						page: res.data.page,
						size: res.data.size,
						totalElements: res.data.totalElements,
						totalPages: res.data.totalPages,
					}
					setPagination(pagination)
				}
			})
		}
	}

	const totalTotal = () => {
		let totalOwes = 0;
		let totalRequires = 0;
		let totalSaldoOwes = 0;
		let totalSaldoRequires = 0;
	
		if(classes) {
			classes.forEach((ele) => {
				if(ele.analyticCards) {
					ele.analyticCards.forEach(card => {
						totalOwes = totalOwes + card.totalOwes
						totalRequires = totalRequires + card.totalRequires
						totalSaldoOwes = totalSaldoOwes + card.saldoTotalOwes
						totalSaldoRequires = totalSaldoRequires + card.saldoTotalRequires
					})
				}
			})
		}

		return { totalOwes, totalRequires, totalSaldoOwes, totalSaldoRequires }
	}

	const handleCompany = (val) => {
		setAnalyticCardResponse(null)
		setClasses(null)
		setAccounts(null)
		setSelectedCompany(val)
	}

	const handleReport = (val) => {
		setAnalyticCardResponse(null)
		setClasses(null)
		setAccounts(null)
		setSelectedReport(val)
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
						{"IZVEŠTAJ"}
					</FormLabel>
					<SelectDropdown
						options={reportOptions}
						onChange={(val) => handleReport(val.value)}
					/>
				</Box>
				{
					selectedReport === reportAnalyticCard && (
					<>
						<Box w="300px">
							<FormLabel color="mc_medium" mb="10px">
								{"PREDUZEĆE"}
							</FormLabel>
							<SelectDropdown
								options={companyOptions}
								onChange={(val) => handleCompany(val.value)}
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
							{"PREDUZEĆE"}
						</FormLabel>
						<SelectDropdown
							options={companyOptions}
							onChange={(val) => handleCompany(val.value)}
						/>
					</Box>
					)
				}
				{
					selectedReport === reportGrossBalanceSheet && (
						<>
						<Box w="300px">
							<FormLabel color="mc_medium" mb="10px">
								{"PREDUZEĆE"}
							</FormLabel>
							<SelectDropdown
								options={companyOptions}
								onChange={(val) => handleCompany(val.value)}
							/>
						</Box>
						<DatePickerWrapper
							minW="200px"
							label={"Od"}
							selected={startDate}
							calendarContainer={Calendar}
							onChange={(date) => setStartDate(date)}
							dateFormat="dd-MM-yyyy"
						/>
						<DatePickerWrapper
								minW="200px"
								label={"Do"}
								selected={endDate}
								calendarContainer={Calendar}
								onChange={(date) => setEndDate(date)}
								dateFormat="dd-MM-yyyy"
							/>
						</>
					)
				}

				{
					selectedReport === reportContoPlan && (
						<Box w="300px">
							<FormLabel color="mc_medium" mb="10px">
								{"PREDUZEĆE"}
							</FormLabel>
							<SelectDropdown
								options={companyOptions}
								onChange={(val) => handleCompany(val.value)}
							/>
						</Box>
	
					)
				}

				<CustomButton type="update" text="GENERIŠI" onClick={() => handleSubmit()}/>
			</Flex>
			<Flex justify="center" align="center" h="370px">
				{
					analyticCardResponse ? 
						<AnalyticCardReport response={analyticCardResponse} /> :
					accounts ?
					<Flex direction="column" gridGap="150px" h={"100%"} mt="50px"> 
						{accounts.length > 0 ? accounts.map((ele, i) => {
							return <AccountDetail response={ele} /> 
						}) 
						:
						<Heading>Nema dovoljno podataka</Heading>
					}
					</Flex>
					: classes ? 
					<Flex direction="column" gridGap="50px" h={"100%"} mt="70px"> 
						<Flex direction="column">
							<Heading alignSelf="center">{`Bilans stanja preduzeća ${hookCompany.dropdown.find(ele => ele.id === selectedCompany).name}`}</Heading>
							<Heading alignSelf="center">{`za period od: ${dateFormatter(startDate)} do: ${dateFormatter(endDate)}`}</Heading>
						</Flex>
						{classes.map((ele, i) => {
							if(ele.analyticCards && ele.analyticCards.length > 0) {
								return <ClassComp contoClass={ele} /> 
							}
						})}
						<Flex gridGap="240px" ml="450px">
							<FormLabel ml={totalTotal().totalOwes === 0 && "15px"}>{priceFormatter(totalTotal().totalOwes)}</FormLabel>
							<FormLabel ml={totalTotal().totalRequires === 0 && "35px"}>{priceFormatter(totalTotal().totalRequires)} </FormLabel>
							<FormLabel ml={totalTotal().totalSaldoOwes === 0 && "35px"}>{priceFormatter(totalTotal().totalSaldoOwes)}</FormLabel>
							<FormLabel ml={totalTotal().totalSaldoRequires === 0 && "35px"}>{priceFormatter(totalTotal().totalSaldoRequires)}</FormLabel>
						</Flex>
					</Flex>
					: contoPlan && pagination  ?
					<Flex direction="column" gridGap="50px" h={"100%"} mt="70px">
						<Heading alignSelf="center">{`Kontni plan preduzeća ${hookCompany.dropdown.find(ele => ele.id === selectedCompany).name}`}</Heading>
						<ContoPlanTable data={contoPlan} pagination={pagination} report={false} />
					</Flex>
					: null
				}
			</Flex>

		</Layout>
	)
}

export default ReportPage