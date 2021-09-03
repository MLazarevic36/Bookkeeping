import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"
import { Box, useDisclosure } from "@chakra-ui/react"
import Pagination from "./Pagination"
import DeleteModal from "../modals/DeleteModal"
import { useState } from "react"
import CustomModal from "../modals/CustomModal"
import ContoForm from "../forms/ContoForm"
import CustomButton from "../CustomButton"
import { defaultSize, statusActive, statusOptions, typeOptions, typeSynthetic } from "../../utils/strings"
import useConto from "../../redux/hooks/useConto"
import useUser from "../../redux/hooks/useUser"

const ContoPlanTable = ({data, pagination, selectData}) => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [updateData, setUpdateData] = useState(null)

	const hook = useConto()
	const hookUser = useUser()

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
			formatter: (cell) => {
				if(cell === typeSynthetic) {
					return "SINTETIČKI"
				}else{
					return "ANALITIČKI"
				}
			}
        },
		{
            dataField: "status",
            text: "Status",
			formatter: (cell) => {
				if(cell === statusActive) {
					return "AKTIVAN"
				}else{
					return "NEAKTIVAN"
				}
			}
        },
	]

	const handleUpdateModal = (row) => {

		const defaultType = typeOptions.find(e => e.value === row.type)
		const defaultStatus = statusOptions.find(e => e.value === row.status)


        const defaultValues = {
            id: row.id,
			label: row.label,
			description: row.description,
			type: defaultType,
			status: defaultStatus
        }

        setUpdateData(defaultValues)

        onOpen()
    }

	const expandRow = {
        renderer: (row) => (
            <div className="btns-container">
                <DeleteModal remove={() => handleDelete(row.id)} />
                {/* <UpdateButton onClick={() => handleUpdateModal(row)} /> */}
				<CustomButton type="update" onClick={() => handleUpdateModal(row)}/>
            </div>
        ),
        className: "expandedRow",
        parentClassName: "parentExpandedRow",
    }

	const handleDelete = (id) => {
		hook.remove(id).then((res) => {
			if(res !== undefined && res.status === 200) {
				onClose()
				hook.fetchContos(0, defaultSize, hookUser.employee.company)
			}
		})
	}

	const submit = (data) => {
		
		const payload = {
			id: updateData.id,
			label: data.label,
			description: data.description,
			status: data.status.value,
			type: data.type.value,
			contoPlan: hook.contos[0].contoPlan
		}

		hook.update(payload).then((res) => {
			if(res !== undefined && res.status === 200) {
				onClose()
				hook.fetchContos(0, defaultSize, hookUser.employee.company)
			}
		})
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
					selectData={selectData}
				/>
			</CustomModal>
		</>
	)
}

export default ContoPlanTable;