import { FormLabel } from "@chakra-ui/form-control"
import { Flex } from "@chakra-ui/layout"
import { Box, Spacer } from "@chakra-ui/react"
import useCompany from "../../redux/hooks/useCompany"
import { dateFormatter, priceFormatter, typeFormatter } from "../../utils/functions"
import AccountItemTable from "../tables/AccountItemTable"

const AccountDetail = ({response}) => {

	const hookCompany = useCompany()

	const company = hookCompany.dropdown.find((ele) => ele.id === response.company)
	const division = hookCompany.divisions.find((ele) => ele.id === response.companyDivision)

	return (
		<Flex gridGap="12" direction="column">
			<Flex direction="row" ml="2">
				<FormLabel>Broj naloga: {response.id}</FormLabel>
				<Spacer />
				<FormLabel>Kompanija: {company.name}</FormLabel>
				<Spacer />
				<FormLabel>Poslovna jedinica: {division.name}</FormLabel>
				<Spacer />
				<FormLabel>Tip naloga: {typeFormatter(response.accountType)}</FormLabel>
				<Spacer />
				<FormLabel>Datum naloga: {dateFormatter(response.accountDate)}</FormLabel>
			</Flex>
			<AccountItemTable data={response.accountItems} />
			<Flex direction="row" alignSelf="center" gridGap="100px">
				<FormLabel>Ukupno duguje: {priceFormatter(response.owesAmountTotal)}</FormLabel>
				<FormLabel>Ukupno potrazuje: {priceFormatter(response.requiresAmountTotal)}</FormLabel>
				<FormLabel>Ukupni saldo: {priceFormatter(response.saldo)}</FormLabel>
			</Flex>
		</Flex>
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