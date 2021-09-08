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
import {  Heading } from "@chakra-ui/layout"

const AnalyticCardTable = ({data}) => {

	const hook = useConto()
	const hookUser = useUser()

	const columns = [
		{
            dataField: "accountDate",
            text: "Datum naloga",
			formatter: (cell) => {
				const newDate = new Date()
				newDate.setTime(cell)
				return newDate.toLocaleDateString("en-GB")
			}
        },
        {
            dataField: "documentDate",
            text: "Datum dokumenta",
			formatter: (cell) => {
				const newDate = new Date()
				newDate.setTime(cell)
				return newDate.toLocaleDateString("en-GB")
			}
        },
		{
            dataField: "documentNumber",
            text: "Broj dokumenta",
        },
		{
            dataField: "accountType",
            text: "Tip naloga",
        },
		{
            dataField: "owes",
            text: "Duguje",
        },
		{
            dataField: "requires",
            text: "Potrazuje",
        },
		{
			dataField: "saldo",
			text: "Saldo"
		}
	]

	return (
		<>
			{
				data.length > 0 ? 			
				<TablesStyles>
					<BootstrapTable
						data={data}
						columns={columns}
						classes="TablesStyles"
						keyField={"id"}
						bordered
						bootstrap4
					/>
				</TablesStyles>
				:
				<Heading as="h4" size="md" alignSelf="center">Nema dovoljno podataka za izabrani konto</Heading> 
			}

		</>
	)
}

export default AnalyticCardTable;