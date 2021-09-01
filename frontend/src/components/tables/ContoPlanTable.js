import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"
import { createStoreHook } from "react-redux"
import { Box, useDisclosure } from "@chakra-ui/react"
import Pagination from "./Pagination"
import DeleteModal from "../modals/DeleteModal"
import { useState } from "react"
import CustomModal from "../modals/CustomModal"
import ContoForm from "../forms/ContoForm"
import CustomButton from "../CustomButton"

const ContoPlanTable = ({data, pagination}) => {

	// const data = [{
	// 	id: 1,
	// 	label: "00",
	// 	description: "neki opis"
		
	// },
	// {
	// 	id: 2,
	// 	label: "000",
	// 	description: "neki opis"
		
	// }
	// ]

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [updateData, setUpdateData] = useState(null)

	const columns = [
		{
            dataField: "label",
            text: "Oznaka",
        },
        {
            dataField: "description",
            text: "Opis",
        },
		{
            dataField: "type",
            text: "Tip",
        },
		{
            dataField: "status",
            text: "Status",
        },
	]

	const handleUpdateModal = (row) => {


        const defaultValues = {
            id: row.id,
			label: row.label,
			description: row.description,
			type: row.type,
			status: row.status
        }

        setUpdateData(defaultValues)

        onOpen()
    }

	const expandRow = {
        renderer: (row) => (
            <div className="btns-container">
                <DeleteModal remove={() => console.log(row.id)} />
                {/* <UpdateButton onClick={() => handleUpdateModal(row)} /> */}
				<CustomButton type="update" onClick={() => handleUpdateModal(row)}/>
            </div>
        ),
        className: "expandedRow",
        parentClassName: "parentExpandedRow",
    }

	const submit = (data) => {
		console.log(data)
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
			<CustomModal isOpen={isOpen} onClose={onClose} size={"lg"} overlayClick={false}>
				<ContoForm 
					submit={submit} 
					updateData={updateData}
					close={onClose}
				/>
			</CustomModal>
		</>
	)
}

export default ContoPlanTable;