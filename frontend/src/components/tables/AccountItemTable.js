import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"
import useCompany from "../../redux/hooks/useCompany"
import useConto from "../../redux/hooks/useConto"
import { dateFormatter, priceFormatter } from "../../utils/functions"

const AccountItemTable = ({data}) => {

    // private Long owesAmount;
    // private Long requiresAmount;
    // private Long documentNumber;
    // private Date documentDate;
    // private Date currencyDate;
    // private Long account;
    // private Long saldo;
	const hookCompany = useCompany()
	const hookConto = useConto()

	const columns = [
		{
			dataField: "conto",
			text: "Konto",
			formatter: (cell) => {
				const conto = hookConto.dropdown.find((ele) => ele.id === cell)

				return `${conto.label} - ${conto.description}`
			}
		},
        {
            dataField: "partner",
            text: "Partner",
			formatter: (cell) => {
				const partner = hookCompany.divisions.find((ele) => ele.id === cell) 
				return partner.name
			}
        },
		{
			dataField: "description",
			text: "Opis"
		},
		{
			dataField: "documentNumber",
			text: "Broj dokumenta"
		},
		{
            dataField: "documentDate",
            text: "Datum dokumenta",
			formatter: (cell) => {
				return dateFormatter(cell)
			}
        },
		{
            dataField: "currencyDate",
            text: "Datum valute",
			formatter: (cell) => {
				return dateFormatter(cell)
			}
        },
		{
            dataField: "owesAmount",
            text: "Duguje",
			formatter: (cell) => {
				return priceFormatter(cell)
			}
        },
		{
            dataField: "requiresAmount",
            text: "Potrazuje",
			formatter: (cell) => {
				return priceFormatter(cell)
			}
        },
		{
            dataField: "saldo",
            text: "Saldo",
			formatter: (cell) => {
				return priceFormatter(cell)
			}
        },
	]

	return (
		
			<TablesStyles>
				<BootstrapTable
					data={data}
					columns={columns}
					keyField="id"
					classes="TablesStyles"
					bordered
					bootstrap4
				/>
			</TablesStyles>
	)
}

export default AccountItemTable