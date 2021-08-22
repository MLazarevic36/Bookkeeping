import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const FormInput = ({ type, inputName, regName, error, control }) => {
	return (
		<FormControl minH={"100px"} isInvalid={error}>
			<FormLabel>
				{inputName}
			</FormLabel>
			<InputGroup>
				<Controller
					control={control}
					name={regName}
					render={({ field }) => (
						<Input
							{...field}
							type={type}
							rounded="md"
							boxShadow="md"
						/>
					)}
					defaultValue=""
					rules={{ required: true }}
				/>
			</InputGroup>
			{error !== undefined && (
				<FormErrorMessage color="red">{error.message}</FormErrorMessage>
			)}
		</FormControl>
	);
};

export default FormInput;
