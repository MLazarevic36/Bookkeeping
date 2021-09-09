import { FormLabel } from "@chakra-ui/form-control"
import { Flex } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/react"
import AccountItemTable from "../tables/AccountItemTable"

const AccountDetail = ({response}) => {

	return (
		<Box>
			<Flex direction="row" gridGap="170px">
				<FormLabel>Broj naloga: {response.id}</FormLabel>
				<FormLabel>Kompanija: {response.company}</FormLabel>
				<FormLabel>Poslovna jedinica: {response.companyDivision}</FormLabel>
				<FormLabel>Tip naloga: {response.accountType}</FormLabel>
				<FormLabel>Datum naloga: {response.accountDate}</FormLabel>
			</Flex>
			<AccountItemTable data={response.accountItems} />
			<Flex direction="row" alignSelf="center" gridGap="100px">
				<FormLabel>Ukupno duguje: {response.owesAmountTotal}</FormLabel>
				<FormLabel>Ukupno potrazuje: {response.requiresAmountTotal}</FormLabel>
				<FormLabel>Ukupni saldo: {response.saldo}</FormLabel>
			</Flex>
		</Box>
	)
}

export default AccountDetail

// private Long id;
// private Long company;
// private Long companyDivision;
// private String accountType;
// private String accountStatus;
// private Date accountDate;
// private List<AccountItemDTO> accountItems;
// private String owesAmountTotal;
// private String requiresAmountTotal;
// private Long saldo;