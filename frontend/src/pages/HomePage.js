import { FormLabel } from "@chakra-ui/form-control";
import { Flex, Heading } from "@chakra-ui/layout";
import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import useCompany from "../redux/hooks/useCompany";
import useUser from "../redux/hooks/useUser";

const HomePage = () => {

	const hook = useUser()
	const hookCompany = useCompany()

	useEffect(() => {
		hook.fetchData()
		hookCompany.fetchC()
	}, [])  //eslint-disable-line
	
	const company = hookCompany.dropdown.find((ele) => ele.id === hook.employee.company)

	return( 
		<Layout>
			{
				hook.username && <Heading mt="20px">Dobrodošao {hook.username}</Heading>
			}
			{
				hook.employee &&

				<Flex direction="column">
					<FormLabel>Ime: {hook.employee.firstName}</FormLabel>
					<FormLabel>Prezime: {hook.employee.lastName}</FormLabel>
					<FormLabel>JMBG: {hook.employee.jmbg}</FormLabel>
					<FormLabel>Adresa: {hook.employee.address}</FormLabel>
					<FormLabel>Preduzeće: {company && company.name}</FormLabel>
				</Flex>
			}
		
		</Layout>
	)
};

export default HomePage;
