import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"

const AccountItemTable = ({data}) => {

    // private Long owesAmount;
    // private Long requiresAmount;
    // private Long documentNumber;
    // private Date documentDate;
    // private Date currencyDate;
    // private Long account;
    // private Long saldo;

	const columns = [
		{
			dataField: "conto",
			text: "Konto"
		},
        {
            dataField: "partner",
            text: "Partner",
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
				const newDate = new Date()
				newDate.setTime(cell)
				return newDate.toLocaleDateString("en-GB")
			}
        },
		{
            dataField: "currencyDate",
            text: "Datum valute",
			formatter: (cell) => {
				const newDate = new Date()
				newDate.setTime(cell)
				return newDate.toLocaleDateString("en-GB")
			}
        },
		{
            dataField: "owesAmount",
            text: "Ukupno duguje",
        },
		{
            dataField: "requiresAmount",
            text: "Ukupno potrazuje",
        },
		{
            dataField: "saldo",
            text: "Ukupni saldo",
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