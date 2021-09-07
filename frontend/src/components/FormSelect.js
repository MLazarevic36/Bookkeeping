import { FormControl, FormLabel } from "@chakra-ui/react"
import { Controller } from "react-hook-form"
import SelectDropdown from "./SelectDropdown"

const FormSelect = ({label, control, options, defaultValue, regName}) => {

	return (
		<FormControl w="20%" minW="450px" minH={"100px"}>
			<FormLabel color="#012C31" fontSize="16px">
				{label}
			</FormLabel>
			<Controller
				control={control}
				name={regName}
				defaultValue={defaultValue}
				render={({ field, ref }) => 
					<SelectDropdown 
						{...field} 
						ref={ref} 
						options={options} 
						// value={field.value}
					/>}
			/>
		</FormControl>
	)
}

export default FormSelect