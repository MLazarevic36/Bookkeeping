import { FormLabel } from "@chakra-ui/form-control"
import { Flex, Heading } from "@chakra-ui/layout"
import { priceFormatter } from "../../utils/functions";
import ClassTable from "../tables/ClassTable"

const ClassComp = ({ contoClass }) => {

	let totalOwes = 0;
	let totalRequires = 0;
	let totalSaldoOwes = 0;
	let totalSaldoRequires = 0;

	contoClass.analyticCards.forEach(card => {
		totalOwes = totalOwes + card.totalOwes
		totalRequires = totalRequires + card.totalRequires
		totalSaldoOwes = totalSaldoOwes + card.saldoTotalOwes
		totalSaldoRequires = totalSaldoRequires + card.saldoTotalRequires
	})

	return (
		<Flex direction="column">
			<Heading>{`Klasa ${contoClass.className}`}</Heading>
			
			<ClassTable data={contoClass.analyticCards}/>
			
			<Flex gridGap="240px" ml="450px">
				<FormLabel>{priceFormatter(totalOwes)}</FormLabel>
				<FormLabel>{priceFormatter(totalRequires)} </FormLabel>
				<FormLabel>{priceFormatter(totalSaldoOwes)}</FormLabel>
				<FormLabel>{priceFormatter(totalSaldoRequires)}</FormLabel>
			</Flex>

		</Flex>
	)
}

export default ClassComp