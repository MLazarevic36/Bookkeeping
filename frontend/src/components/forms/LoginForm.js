import { InputGroup } from "@chakra-ui/input";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import { useForm } from "react-hook-form";
import useUser from "../../redux/hooks/useUser";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

const LoginForm = () => {
	const hook = useUser();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	return (
		<Flex justify="center" alignItems="center" h="70vh" direction="column">
			<Heading as="h1" letterSpacing="5px" mb="55px">
				{"Knjigovodstvo"}
			</Heading>
			<form onSubmit={handleSubmit(hook.signin)}>
				<Stack w="530px" spacing={3} alignItems="center">
					<InputGroup>
						<FormInput
							control={control}
							type="text"
							inputName="Korisničko ime"
							regName="username"
							error={errors.username}
						/>
					</InputGroup>
					<InputGroup>
						<FormInput
							control={control}
							type="password"
							inputName="Lozinka"
							regName="password"
							error={errors.password}
						/>
					</InputGroup>
					<CustomButton type="submit" />
								
				</Stack>
			</form>
		</Flex>
	);
};

export default LoginForm;
