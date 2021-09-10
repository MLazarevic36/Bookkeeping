import { Box, Flex, Heading } from "@chakra-ui/layout"
import useConto from "../../redux/hooks/useConto"
import AnalyticCardTable from "../tables/AnalyticCardTable"

const AnalyticCardReport = ({ response }) => {


	const hookConto = useConto()

	const conto = hookConto.dropdown.find((ele) => ele.id === response.conto)

	let totalOwes = 0
	let totalRequires = 0

	response.items.forEach((item) => {
		totalOwes = totalOwes + item.owes
		totalRequires = totalRequires + item.requires
	})

	return (
		<Flex direction="column" gridGap="5">
			<Heading alignSelf="center">{conto !== undefined && `${conto.label} - ${conto.description}`}</Heading>
			<AnalyticCardTable data={response.items}/>
			<Flex direction="row" gridGap="5" alignSelf="center">
				<Heading as="h4" size="md">{`Ukupno duguje: ${totalOwes}.00`}</Heading>
				<Heading as="h4" size="md">{`Ukupno potrazuje: ${totalRequires}.00`}</Heading>
				<Heading as="h4" size="md">{`Ukupni saldo: ${totalOwes - totalRequires}.00`}</Heading>
			</Flex>

		</Flex>
	)
}

export default AnalyticCardReport