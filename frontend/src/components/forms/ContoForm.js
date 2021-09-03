import { Button, Flex, FormLabel, FormControl } from "@chakra-ui/react"
import FormInput from "../FormInput"
import * as yup from "yup"
import { useYupValidationResolver } from "../../utils/functions"
import { useForm } from "react-hook-form"
import SelectDropdown from "../SelectDropdown"
import FormSelect from "../FormSelect"
import styled from "styled-components"

const ContoForm = ({ submit, close, updateData, selectData }) => {

	
	const validationSchema = yup.object().shape({
        label: yup.string()
            .required('Oznaka je obavezna!')
			.nullable(),
		description: yup.string()
            .required('Opis je obavezan!')
			.nullable(),
		// position: yup.object()
		// 	.required('Position is required!'),
    })

	const resolver = useYupValidationResolver(validationSchema)

	const {
        handleSubmit,
        control,
        formState: { errors },
		setValue
    } = useForm({ 
		resolver: resolver,
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			agreePrivacy: false
		},
		criteriaMode: "firstError",
		shouldFocusError: true,
		shouldUnregister: true,
	})

	const handleSelect = (val) => {
		setValue("label", val.value.label)
		setValue("description", val.value.name)
	}

	return (

		<Form onSubmit={handleSubmit(submit)}>
			<FormControl>
				<FormLabel color="#012C31" fontSize="16px">
					Kontni okvir
				</FormLabel>
				<SelectDropdown onChange={handleSelect} options={selectData.classOptions}/>
			</FormControl>
			<FormInput 
				type="text"
				inputName="Oznaka"
				regName="label"
				errors={errors.label}
				control={control}
				defaultValue={updateData && updateData.label}
			/>
		
			<FormInput 
				type="text"
				inputName="Opis"
				regName="description"
				errors={errors.description}
				control={control}
				defaultValue={updateData && updateData.description}
			/>

			<FormSelect
				label={"Tip"}
				regName={"type"}
				control={control}
				options={selectData.typeOptions}
				defaultValue={updateData && updateData.type}	
			/>

			<FormSelect
				label={"Status"}
				regName={"status"}
				control={control}
				options={selectData.statusOptions}
				defaultValue={updateData && updateData.status}
			/>
			<Flex justify="flex-end" mt={4}>
				<Button onClick={close} variant="red">
					{"ODUSTANI"}
				</Button>
				<Button type="submit" variant="medium" ml={3}>
					{"SAČUVAJ"}
				</Button>
			</Flex>
		</Form>

	)
}

export default ContoForm

const Form = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
`