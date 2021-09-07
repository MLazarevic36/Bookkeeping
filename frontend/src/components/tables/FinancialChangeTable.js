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

const FinancialChangeTable = ({data}) => {

	const columns = [
		{
            dataField: "date",
            text: "Datum",
			formatter: (cell) => {
				const newDate = new Date()
				newDate.setTime(cell)
				return newDate.toLocaleDateString("en-GB")
			}
        },
		{
			dataField: "description",
			text: "Opis"
		},
        {
            dataField: "financialChangeDirection",
            text: "Smer",
			formatter: (cell) => {
				if(cell === "POSITIVE"){
					return "+"
				}else{
					return "-"
				}
			}
        },
		{
            dataField: "amount",
            text: "Iznos",
			formatter: (cell) => {
				return `${cell}.00`
			}
        },
	]


	return (
		
		<TablesStyles>
			<BootstrapTable
				data={data}
				columns={columns}
				keyField="id"
				classes="TablesStyles"
				bordered
				bootstrap4
			/>
		</TablesStyles>
		
	)
}

export default FinancialChangeTable;