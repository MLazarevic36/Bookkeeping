import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"
import { Box, useDisclosure } from "@chakra-ui/react"
import Pagination from "./Pagination"
import DeleteModal from "../modals/DeleteModal"
import { useState } from "react"
import CustomModal from "../modals/CustomModal"
import CustomButton from "../CustomButton"
import { defaultSize, statusOptions, typeAccountOptions, typeOptions } from "../../utils/strings"
import useConto from "../../redux/hooks/useConto"
import useUser from "../../redux/hooks/useUser"
import AccountForm from "../forms/AccountForm"
import useCompany from "../../redux/hooks/useCompany"
import useAccount from "../../redux/hooks/useAccount"
import useForms from "../../redux/hooks/useForms"

const AccountTable = ({data, pagination, selectData}) => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [updateData, setUpdateData] = useState(null)

	const hook = useAccount()
	const hookUser = useUser()
	const hookCompany = useCompany()
	const hookForms = useForms()

	const columns = [
		{
			dataField: "id",
			text: "Broj naloga"
		},
		{
            dataField: "companyDivision",
            text: "Poslovna jedinica",
			formatter: (cell) => {
				return hookCompany.divisions.find((e) => e.id === cell).name
			}
        },
        {
            dataField: "accountType",
            text: "Tip naloga",
			formatter: (cell) => {
				if(cell === "CALCULATION") {
					return "Kalkulacija"
				}else{
					return "Izvod"
				}
			}
        },
		{
            dataField: "accountDate",
            text: "Datum",
			formatter: (cell) => {
				const newDate = new Date()
				newDate.setTime(cell)
				return newDate.toLocaleDateString("en-GB")
			}
        },
		{
            dataField: "owesAmountTotal",
            text: "Ukupno duguje",
        },
		{
            dataField: "requiresAmountTotal",
            text: "Ukupno potrazuje",
        },
		{
            dataField: "accountStatus",
            text: "Status",
			formatter: (cell) => {
				if(cell === "READY_FOR_CREDIT") {
					return "Spreman za knjizenje"
				}else if(cell === "CREDITED") {
					return "Proknjizen"
				}else if(cell === "CANCELLED") {
					return "Storniran"
				}
			}
        },
	]

	const handleUpdateModal = (row) => {

		const companyDivision = hookCompany.divisions.find((e) => e.id === row.companyDivision)
		const defaultCompanyDivision = { label: companyDivision.name, value: companyDivision.id}
		const defaultAccountType = typeAccountOptions.find(e => e.value === row.accountType)

		console.log(row)
        const defaultValues = {
            id: row.id,
			companyDivision: defaultCompanyDivision,
			date: row.accountDate,
			accountType: defaultAccountType
        }

		const accountItems = []

		row.accountItems.forEach((ele) => {
			let item = {}
			item["id"] = ele.id
			item["conto"] = ele.conto
			item["partner"] = ele.partner
			item["description"] = ele.description
			item["owesAmount"] = ele.owesAmount
			item["requiresAmount"] = ele.requiresAmount
			item["documentNumber"] = ele.documentNumber
			item["documentDate"] = ele.documentDate
			item["currencyDate"] = ele.currencyDate
			item["account"] = ele.account
			accountItems.push(item)
		})

		console.log(defaultCompanyDivision, "deffffffffff")

		hookForms.setItems(accountItems)

        setUpdateData(defaultValues)

        onOpen()
    }

	const expandRow = {
        renderer: (row) => (
            <div className="btns-container">
				{	row.accountStatus === "READY_FOR_CREDIT" && <CustomButton type="update" text="PROKNJIŽI" onClick={() => handleCredit(row.id)} /> }
						
                {	row.accountStatus === "READY_FOR_CREDIT" ? 
						<>
							<DeleteModal 
								text="OBRIŠI" 
								remove={() => hook.remove(row.id)} 
								fetch={() => hook.fetchPage(0, defaultSize, hookUser.employee.company)} 
							/>
							<CustomButton type="update" text="IZMENI" onClick={() => handleUpdateModal(row)}/>
						</>
						:  row.accountStatus === "CREDITED" ?
						<>
							{/* <CustomButton type="update"  text="VIDI STAVKE" onClick={() => handleUpdateModal(row)}/> */}
							<DeleteModal 
								text="STORNIRAJ" 
								remove={() => hook.cancel(row.id)} 
								fetch={() => hook.fetchPage(0, defaultSize, hookUser.employee.company)} 
							/>
						</> : <></>
						}

            </div>
        ),
        className: "expandedRow",
        parentClassName: "parentExpandedRow",
    }

	// const handleDelete = (id) => {
	// 	hook.remove(id).then((res) => {
	// 		if(res !== undefined && res.status === 200) {
	// 			onClose()
				
	// 		}
	// 	})
	// }

	const handleCredit = (id) => {
		hook.credit(id).then((res) => {
			if(res !== undefined && res.status === 200) {
				hook.fetchPage(0, defaultSize, hookUser.employee.company)
			}
		})
	}

	const submit = (data) => {
		// console.log(data)

		const accountItems = []

		hookForms.accountItems.forEach(item => accountItems.push({
			id: Number(item.id),
			conto: Number(item.conto),
			partner: Number(item.partner),
			description: item.description,
			owesAmount: Number(item.owesAmount),
			requiresAmount: Number(item.requiresAmount),
			documentNumber: Number(item.documentNumber),
			documentDate: item.documentDate,
			currencyDate: item.currencyDate,
			account: updateData.id
		}))

		const payload = {
			id: updateData.id,
			companyDivision: data.company_division.value,
			accountType: data.type.value,
			accountDate: data.account_date,
			accountStatus: "READY_FOR_CREDIT",
			company: hookUser.employee.company,
			accountItems : accountItems
		}

		hook.update(payload).then((res) => {
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
		hookForms.setItems(clean)
		onClose()
	}



	return (
		<>
			<TablesStyles>
				<BootstrapTable
					data={data}
					columns={columns}
					keyField="id"
					classes="TablesStyles"
					expandRow={expandRow}
					bordered
					bootstrap4
				/>
			</TablesStyles>
			{data.length >= 10 &&
				<Box>
					<Pagination
						paginationData={pagination}
						// fetchPage={fetchPage}
						// setSize={setSize}
					/>
				</Box>
			} 
			<CustomModal isOpen={isOpen} onClose={onClose} size={"full"} overlayClick={false}>
				<AccountForm 
					submit={submit} 
					updateData={updateData}
					close={handleClose}
					selectData={selectData}
				/>
			</CustomModal>
		</>
	)
}

export default AccountTable;