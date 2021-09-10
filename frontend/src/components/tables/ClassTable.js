import { TablesStyles } from "./TableStyles"
import BootstrapTable from "react-bootstrap-table-next"
import useCompany from "../../redux/hooks/useCompany"
import useConto from "../../redux/hooks/useConto"
import { dateFormatter, priceFormatter } from "../../utils/functions"

const ClassTable = ({data}) => {

	const hookConto = useConto()

	const columns = [
		{
			dataField: "contoId",
			text: "Konto",
			formatter: (cell) => {
				const conto = hookConto.dropdown.find((ele) => ele.id === cell)

				return `${conto.label} - ${conto.description}`
			}
		},
		{
            dataField: "totalOwes",
            text: "Promet duguje",
			formatter: (cell) => {
				return priceFormatter(cell)
			}
        },
		{
            dataField: "totalRequires",
            text: "Promet potrazuje",
			formatter: (cell) => {
				return priceFormatter(cell)
			}
        },
		{
            dataField: "saldoTotalOwes",
            text: "Saldo duguje",
			formatter: (cell) => {
				return priceFormatter(cell)
			}
        },
		{
            dataField: "saldoTotalRequires",
            text: "Saldo potrazuje",
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

export default ClassTable