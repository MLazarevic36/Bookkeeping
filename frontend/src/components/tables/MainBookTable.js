import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"
import { Box, useDisclosure } from "@chakra-ui/react"
import Pagination from "./Pagination"
import DeleteModal from "../modals/DeleteModal"
import { useState } from "react"
import CustomModal from "../modals/CustomModal"
import ContoForm from "../forms/ContoForm"
import CustomButton from "../CustomButton"
import { defaultSize, statusActive, statusOptions, typeContoOptions, typeSynthetic } from "../../utils/strings"
import useConto from "../../redux/hooks/useConto"
import useUser from "../../redux/hooks/useUser"
import { useEffect } from "react"
import FinancialChangeTable from "./FinancialChangeTable"

const MainBookTable = ({data, pagination, selectData}) => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [financialChanges, setFinancialChanges] = useState([])

	const hook = useConto()
	const hookUser = useUser()

	const columns = [
		{
            dataField: "conto",
            text: "Konto",
			formatter: (cell) => {
				const conto = hook.dropdown.find((ele) => ele.id === cell)

				return `${conto.label} - ${conto.description}`
			}
		
        },
        {
            dataField: "owesAmountTotal",
            text: "Ukupno duguje",
			formatter: (cell) => {
				return `${cell}.00`
			}
        },
		{
            dataField: "requiresAmountTotal",
            text: "Ukupno potrazuje",
			formatter: (cell) => {
				return `${cell}.00`
			}
        },
		{
            dataField: "saldo",
            text: "Ukupni saldo",
			formatter: (cell) => {
				return `${cell}.00`
			}
        },
	]

	const handleUpdateModal = (row) => {

        setFinancialChanges(row.financialChanges)

        onOpen()
    }

	const expandRow = {
        renderer: (row) => (
            <div className="btns-container">
                
                {/* <UpdateButton onClick={() => handleUpdateModal(row)} /> */}
				<CustomButton type="update" text="ISTORIJA" onClick={() => handleUpdateModal(row)}/>
            </div>
        ),
        className: "expandedRow",
        parentClassName: "parentExpandedRow",
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
			{data.length >= defaultSize &&
				<Box>
					<Pagination
						paginationData={pagination}
						// fetchPage={fetchPage}
						// setSize={setSize}
					/>
				</Box>
			} 
			<CustomModal isOpen={isOpen} onClose={onClose} size={"6x1"} overlayClick={true}>
				<FinancialChangeTable data={financialChanges}/>
			</CustomModal>
		</>
	)
}

export default MainBookTable;