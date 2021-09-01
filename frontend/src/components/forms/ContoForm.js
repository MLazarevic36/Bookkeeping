import { Button, Flex } from "@chakra-ui/react"
import FormInput from "../FormInput"
import * as yup from "yup"
import { useYupValidationResolver } from "../../utils/functions"
import { useForm } from "react-hook-form"

const ContoForm = ({ submit, close, updateData }) => {

	
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

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Button>Kontni okvir</Button>
			<FormInput 
				type="text"
				inputName="Oznaka"
				regName="label"
				errors={errors.label}
				control={control}
				defaultValue={updateData.label}
			/>
		
			<FormInput 
				type="text"
				inputName="Opis"
				regName="description"
				errors={errors.description}
				control={control}
				defaultValue={updateData.description}
			/>
			{/* <Box mt={4}>
				<FormLabel>{strings.companyType}</FormLabel>
				<Controller
					as={<SelectDropdown />}
					control={control}
					name="company_type"
					options={selectData.companyTypes}
					defaultValue={updateData && updateData.defaultCompanyType}
				/>
			</Box> */}
			<Flex justify="flex-end" mt={4}>
				<Button onClick={close} variant="red">
					{"ODUSTANI"}
				</Button>
				<Button type="submit" variant="medium" ml={3}>
					{"SAČUVAJ"}
				</Button>
			</Flex>
	</form>
	)
}

export default ContoForm