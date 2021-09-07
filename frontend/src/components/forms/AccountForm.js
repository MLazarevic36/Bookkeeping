import { Flex, FormLabel, Button, FormControl } from "@chakra-ui/react"
import * as yup from "yup"
import { useYupValidationResolver } from "../../utils/functions"
import { Controller, useForm } from "react-hook-form"
import SelectDropdown from "../SelectDropdown"
import FormSelect from "../FormSelect"
import styled from "styled-components"
import DatePickerWrapper, { Calendar } from "../CustomDatePicker"
import { useState } from "react"
import { Box, Center, Divider, Heading } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import CustomButton from "../CustomButton"
import useForms from "../../redux/hooks/useForms"
import { NumberInput, NumberDecrementStepper, NumberIncrementStepper, NumberInputField,  NumberInputStepper} from "@chakra-ui/number-input"
import useConto from "../../redux/hooks/useConto"
import useCompany from "../../redux/hooks/useCompany"
import { typeAccountOptions } from "../../utils/strings"
import useAccount from "../../redux/hooks/useAccount"

const AccountForm = ({ submit, close, updateData, selectData }) => {

	const [accountDate, setAccountDate] = useState(null)

	const hook = useForms()
	const hookConto = useConto()
	const hookCompany = useCompany()
	const hookAccount = useAccount()
	
	const validationSchema = yup.object().shape({
        // company_division: yup.string()
        //     .required('Oznaka je obavezna!')
		// 	.nullable(),
		// type: yup.string()
        //     .required('Opis je obavezan!')
		// 	.nullable(),
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

	const getDefaultContoAndPartner = (contoId, partnerId) => {

		const conto = hookConto.dropdown.find((ele) => ele.id === contoId)
		let defaultConto = {}
		if(conto) {
			defaultConto = { label: `${conto.label} - ${conto.description}`, value: conto.id }
		}

		const partner = hookCompany.partners.find((ele) => ele.id === partnerId)
		let defaultPartner = {}
		if(partner) {
			defaultPartner = { label: partner.name, value: partner.id }
		}

		return { defaultConto, defaultPartner }

	}

	const handleDeleteItem = (index, id) => {
		if(id) {
			hookAccount.deleteItem(id)
		}
		hook.removeItem(index)
	}

	return (

		<Form onSubmit={handleSubmit(submit, accountDate)}>
			{console.log(updateData)}
			<Heading as="h3" size="lg">PODACI O NALOGU </Heading>
			<Center height="30px">
				<Divider orientation="horizontal" />
			</Center>
			<Flex flexDirection="row" justify="space-between">
				<FormSelect
					label={"Poslovna jedinica"}
					regName={"company_division"}
					control={control}
					options={selectData.divisions}
					defaultValue={updateData && updateData.companyDivision}
				/>

				<FormSelect
					label={"Tip"}
					regName={"type"}
					control={control}
					options={selectData.types}
					defaultValue={updateData && updateData.accountType}
				/>

				<FormControl w="20%" minW="450px" minH={"100px"}>
					<FormLabel color="#012C31" fontSize="16px">
						{"Datum"}
					</FormLabel>
					<Controller
						control={control}
						name={"account_date"}
						defaultValue={updateData && updateData.date}
						render={({ field, ref }) => 
							<DatePickerWrapper 
								{...field} 
								ref={ref}  
								calendarContainer={Calendar}
								selected={field.value}
								dateFormat="dd-MM-yyyy"
							/>}
					/>
				</FormControl>

			</Flex>
			<Heading as="h3" size="lg">STAVKE</Heading>
			{
				hook.accountItems.map((accountItem, i) => 
				
				<>
				<Center height="50px">
					<Divider orientation="horizontal" />
				</Center>
					<Heading as="h4" size="md">{`${i + 1}. STAVKA`}</Heading>
					<Flex flexDirection="row" justify="space-between">
						<Box w="20%" minW="450px" minH={"100px"}>
							<FormLabel color="#012C31" fontSize="16px">
								{"Konto"}
							</FormLabel>
							<SelectDropdown 
								value={getDefaultContoAndPartner(accountItem.conto, accountItem.partner).defaultConto}
								// defaultValue={updateData && }
								options={selectData.contos} 
								onChange={(val) => hook.updateItem(i, "conto", val.value)}
								
							/>
						</Box>
						<Box w="20%" minW="450px" minH={"100px"}>
							<FormLabel color="#012C31" fontSize="16px">
								{"Partner"}
							</FormLabel>
							<SelectDropdown 
								value={getDefaultContoAndPartner(accountItem.conto, accountItem.partner).defaultPartner}
								// defaultValue={updateData && getDefaultContoAndPartner(accountItem.conto, accountItem.partner).defaultPartner}
								options={selectData.companies} 
								onChange={(val) => hook.updateItem(i, "partner", val.value)}
							/>
						</Box>
						<Box w="20%" minW="450px" minH={"100px"}>
							<FormLabel color="#012C31" fontSize="16px">
								{"Opis"}
							</FormLabel>
							<Input
								type={"text"}
								rounded="md"
								boxShadow="md"
								value={accountItem.description}
								onChange={(e) => hook.updateItem(i, "description", e.target.value)}
							/>
						</Box>

					</Flex>
					<Flex flexDirection="row" justify="space-between" alignSelf="center" gridGap="10">
						<Box w="20%" minW="450px" minH={"100px"}>
							<FormLabel color="#012C31" fontSize="16px">
								{"Duguje"}
							</FormLabel>
							<NumberInput
								defaultValue={accountItem.owesAmount}
								precision={2}
								set={0.2}
								step={1000}
								rounded="md"
								boxShadow="md"
								onChange={(val) => hook.updateItem(i, "owesAmount", val)}
							   >
								<NumberInputField />
								<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</Box>
						<Box w="20%" minW="450px" minH={"100px"}>
							<FormLabel color="#012C31" fontSize="16px">
								{"Potrazuje"}
							</FormLabel>
							<NumberInput
								defaultValue={accountItem.requiresAmount}
								precision={2}
								set={0.2}
								step={1000}
								rounded="md"
								boxShadow="md"
								onChange={(val) => hook.updateItem(i, "requiresAmount", val)}
							   >
								<NumberInputField />
								<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</Box>

					</Flex>
					<Flex flexDirection="row" justify="space-between" alignSelf="center" gridGap="10">

						<Box w="20%" minW="450px" minH={"100px"}>
							<FormLabel color="#012C31" fontSize="16px">
								{"Broj dokumenta"}
							</FormLabel>
							<Input
								type={"number"}
								rounded="md"
								boxShadow="md"
								value={accountItem.documentNumber}
								onChange={(e) => hook.updateItem(i, "documentNumber", e.target.value)}
								
							/>
						</Box>

						<DatePickerWrapper
							label={"Datum dokumenta"}
							selected={accountItem.documentDate && new Date(accountItem.documentDate)}
							calendarContainer={Calendar}
							onChange={(date) => hook.updateItem(i, "documentDate", date)}
							dateFormat="dd-MM-yyyy"
						/>

						<DatePickerWrapper
							label={"Datum valute"}
							selected={accountItem.currencyDate && new Date(accountItem.currencyDate)}
							calendarContainer={Calendar}
							onChange={(date) => hook.updateItem(i, "currencyDate", date)}
							dateFormat="dd-MM-yyyy"
						/>

					</Flex>
					<Center>
						<CustomButton type="delete" onClick={() => handleDeleteItem(i, accountItem.id)}/>
					</Center>
					
				</>
			)
		}

					<Center height="50px">
						<Divider orientation="horizontal" />
					</Center>
					<Flex 
						h={"60px"} 
						alignSelf="center">
						<FormLabel paddingTop="10px">Dodaj novu stavku:</FormLabel>
						<CustomButton type="add" onClick={() => hook.addItem()} />
					</Flex>

					<Flex justify="flex-end" mt={4}>
						<Button onClick={() => close()} variant="red">
							{"ODUSTANI"}
						</Button>
						<Button type="submit" variant="medium" ml={3}>
							{"SAČUVAJ"}
						</Button>
					</Flex>
		</Form>

	)
}

export default AccountForm

const Form = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
`