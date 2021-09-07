import { FormLabel } from "@chakra-ui/form-control"
import { useDisclosure } from "@chakra-ui/hooks"
import { Flex } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { useState } from "react"
import { useEffect } from "react"
import CustomButton from "../components/CustomButton"
import AccountForm from "../components/forms/AccountForm"
import Layout from "../components/layouts/Layout"
import CustomModal from "../components/modals/CustomModal"
import AccountTable from "../components/tables/AccountTable"
import useAccount from "../redux/hooks/useAccount"
import useCompany from "../redux/hooks/useCompany"
import useConto from "../redux/hooks/useConto"
import useForms from "../redux/hooks/useForms"
import useUser from "../redux/hooks/useUser"
import { handleToast, makeSelectOptions, makeSelectOptionsConto } from "../utils/functions"
import { defaultSize, typeAccountOptions } from "../utils/strings"

const AccountPage = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const hook = useAccount()
	const hookCompany = useCompany()
	const hookUser = useUser()
	const hookConto = useConto()
	const hookForm = useForms()
	const toast = useToast()

	const [partners, setPartners] = useState([])
	const [divisions, setDivisions] = useState([])
	const [contos, setContos] = useState([])
	const [accounts, setAccounts] = useState([])

	useEffect(() => {
		hookCompany.fetchP(hookUser.employee.company)
		hookCompany.fetchD(hookUser.employee.company)
		hookConto.fetchDropdown(hookUser.employee.company)
		hook.fetchPage(0, defaultSize, hookUser.employee.company)
	}, [])

	useEffect(() => {
		if(hook.message) {
			handleToast(toast, hook.message, "1")
		}
	}, [hook.message])  //eslint-disable-line

	useEffect(() => {
		if(hookCompany.partners.length > 0) {
			makeSelectOptions(hookCompany.partners, setPartners)
		}

		if(hookCompany.divisions.length > 0) {
			makeSelectOptions(hookCompany.divisions, setDivisions)
		}

		if(hookConto.dropdown.length > 0) {
			makeSelectOptionsConto(hookConto.dropdown, setContos)
		}

	}, [hookCompany.companies, hookCompany.divisions, hookConto.dropdown])

	useEffect(() => {
		if(hook.accounts.length > 0) {
			setAccounts(hook.accounts)
		}
	}, [hook.accounts])

	const selectData = {
		companies: partners,
		divisions: divisions,
		contos: contos,
		types: typeAccountOptions
	}

	const handleSubmit = (data) => {
		// console.log(data)

		const accountItems = []

		hookForm.accountItems.forEach(item => accountItems.push({
			conto: Number(item.conto),
			partner: Number(item.partner),
			description: item.description,
			owesAmount: Number(item.owesAmount),
			requiresAmount: Number(item.requiresAmount),
			documentNumber: Number(item.documentNumber),
			documentDate: item.documentDate,
			currencyDate: item.currencyDate,
		}))

		const payload = {
			companyDivision: data.company_division.value,
			accountType: data.type.value,
			accountDate: data.account_date,
			accountStatus: "READY_FOR_CREDIT",
			company: hookUser.employee.company,
			accountItems : accountItems
		}

		hook.add(payload).then((res) => {
			if(res !== undefined && res.status === 200) {
				handleClose()
				hook.fetchPage(0, defaultSize, hookUser.employee.company)

			}
		})
		
	}

	const handleClose = () => {
		const clean = [{
			conto: null, 
			partner: null, 
			description: "", 
			owesAmount: 0.00, 
			requiresAmount: 0.00, 
			documentNumber: "", 
			documentDate: null, 
			currencyDate: null
		}]
		hookForm.setItems(clean)
		onClose()
	}

	

	return (
		<Layout>
			<Flex 
				h={"60px"} 
				align="center">
					<FormLabel paddingTop="10px">Dodaj novi nalog:</FormLabel>
					<CustomButton type="add" onClick={onOpen} />
			</Flex>
			<AccountTable data={accounts} selectData={selectData}/>
			<CustomModal isOpen={isOpen} onClose={onClose} size={"full"} overlayClick={false}>
				<AccountForm 
					selectData={selectData}
					close={handleClose}
					submit={handleSubmit}
				/>
			</CustomModal>
		</Layout>
	)
}

export default AccountPage