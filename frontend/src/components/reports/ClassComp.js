import { FormLabel } from "@chakra-ui/form-control"
import { Flex, Heading } from "@chakra-ui/layout"
import { priceFormatter } from "../../utils/functions";
import ClassTable from "../tables/ClassTable"

const ClassComp = ({ contoClass }) => {

	let totalOwes = 0;
	let totalRequires = 0;
	let totalSaldoOwes = 0;
	let totalSaldoRequires = 0;

	if(contoClass.analyticCards) {
		contoClass.analyticCards.forEach(card => {
			totalOwes = totalOwes + card.totalOwes
			totalRequires = totalRequires + card.totalRequires
			totalSaldoOwes = totalSaldoOwes + card.saldoTotalOwes
			totalSaldoRequires = totalSaldoRequires + card.saldoTotalRequires
		})
}

	return (
		<Flex direction="column">
			<Heading>{`Klasa ${contoClass.className}`}</Heading>
			
			<ClassTable data={contoClass.analyticCards || []}/>
			
			<Flex gridGap="240px" ml="450px">
				<FormLabel ml={totalOwes === 0 && "15px"}>{priceFormatter(totalOwes)}</FormLabel>
				<FormLabel ml={totalRequires === 0 && "35px"}>{priceFormatter(totalRequires)} </FormLabel>
				<FormLabel ml={totalSaldoOwes === 0 && "35px"}>{priceFormatter(totalSaldoOwes)}</FormLabel>
				<FormLabel ml={totalSaldoOwes === 0 && "35px"}>{priceFormatter(totalSaldoRequires)}</FormLabel>
			</Flex>

		</Flex>
	)
}

export default ClassComp