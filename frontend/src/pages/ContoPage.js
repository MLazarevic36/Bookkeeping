import { Flex, useDisclosure, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import ContoForm from "../components/forms/ContoForm";
import Layout from "../components/layouts/Layout";
import CustomModal from "../components/modals/CustomModal";
import ContoPlanTable from "../components/tables/ContoPlanTable";
import useConto from "../redux/hooks/useConto";
import useUser from "../redux/hooks/useUser";
import { defaultSize, statusOptions, typeContoOptions } from "../utils/strings";
import { useToast } from "@chakra-ui/toast"
import { handleToast } from "../utils/functions";

const ContoPlanPage = () => {

	const hook = useConto()
	const hookUser = useUser()
	const toast = useToast()

	const [contos, setContos] = useState([])
	const [contoClassesOptions, setContoClassesOptions] = useState([])
	const [pagination, setPagination] = useState(null)

	const { isOpen, onOpen, onClose } = useDisclosure()
	
	useEffect(() => {
		hook.fetchPage(0, defaultSize, hookUser.employee.company)
		hook.fetchClasses()
	}, []) //eslint-disable-line

	useEffect(() => {
		if(hook.contos.length > 0) {
			setContos(hook.contos)
		}

		if(hook.pagination) {
			setPagination(hook.pagination)
		}

		if(hook.contoClasses.length > 0) {
			makeContoClassOptions(hook.contoClasses)
		}
	}, [hook.contos, hook.pagination, hook.contoClasses])

	useEffect(() => {
		if(hook.message) {
			handleToast(toast, hook.message, "1")
		}
	}, [hook.message])  //eslint-disable-line

	const selectData = {
		typeOptions: typeContoOptions,
		statusOptions: statusOptions,
		classOptions: contoClassesOptions
	}

	const makeContoClassOptions = (array) => {
		const newArray = []
		array.forEach(e => {
			newArray.push({ label: `${e.classLabel} - ${e.className}`, value: {label: e.classLabel, name: e.className}})
			if(e.contoGroups.length > 0) {
				e.contoGroups.forEach(el => {
					newArray.push({ label: `${el.groupLabel} - ${el.groupName}`, value: {label: el.groupLabel, name: el.groupName}})
					if(el.contoSubGroups.length > 0) {
						el.contoSubGroups.forEach(ele => {
							newArray.push({ label: `${ele.subGroupLabel} - ${ele.subGroupName}`, value: {label: ele.subGroupLabel, name: ele.subGroupName}})
						})
					}
				})
			}
		})
		setContoClassesOptions(newArray)
	}

	const handleSubmit = (data) => {
		
		const payload = {
			label: data.label,
			description: data.description,
			status: data.status.value,
			type: data.type.value,
			contoPlan: hookUser.employee.company
		}

		hook.add(payload).then((res) => {
			if(res !== undefined && res.status === 200) {
				onClose()
				hook.fetchPage(0, defaultSize, hookUser.employee.company)
			}
		})
		console.log(payload)
	}

	return ( 
		<Layout>
			<Flex 
				h={"60px"} 
				align="center">
					<FormLabel paddingTop="10px">Unesi u kontni plan:</FormLabel>
					<CustomButton type="add" onClick={onOpen} />
			</Flex>
			<ContoPlanTable 
				data={contos} 
				pagination={pagination} 
				selectData={selectData}
			/>
			<CustomModal isOpen={isOpen} onClose={onClose} size={"lg"} overlayClick={false}>
				<ContoForm 
					selectData={selectData}
					close={onClose}
					submit={handleSubmit}
				/>
			</CustomModal>

			
		</Layout>
	)
}

export default ContoPlanPage
