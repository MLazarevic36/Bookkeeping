import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"

const LoginForm = () => {

	return (
		<Flex width="full" align="center" justifyContent="center">
			<Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
				<Box textAlign="center">
					<Heading>Welcome, login to continue</Heading>
				</Box>
				<Box my={4} textAlign="center">
					<form>
						<FormControl isRequired>
							<FormLabel>Username</FormLabel>
							<Input type="text" placeholder="test@test.com" />
						</FormControl>
						<FormControl mt={6} isRequired>
							<FormLabel>Password</FormLabel>
							<Input type="password" placeholder="*******" />
						</FormControl>
						<Button width="full" mt={4} type="submit">
							Sign In
						</Button>
					</form>
				</Box>
			</Box>
    	</Flex>
	)

}

export default LoginForm