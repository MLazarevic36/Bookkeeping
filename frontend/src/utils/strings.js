export const serverErrorMessage = "Greška na serveru!";
export const wrongCredentialsMessage = "Uneti podaci nisu ispravni!";

export const defaultSize = 15

export const whiteArrow =
	"https://res.cloudinary.com/datadrill/image/upload/v1629451138/bookkeeping/whiteArrow_xjhyqt.svg";

export const signIn = "Welcome, please sign in";
export const username = "USERNAME";
export const password = "PASSWORD";
export const confirm = "CONFIRM";

export const typeAnalytic = "ANALYTIC"
export const typeSynthetic = "SYNTHETIC"

export const typeCalculation = "CALCULATION"
export const typeExtract = "EXTRACT"

export const statusActive = "ACTIVE"
export const statusInactive = "INACTIVE"

export const reportCreditAccount = "CREDITED_ACCOUNT"
export const reportGrossBalanceSheet = "GROSS_BALANCE_SHEET"
export const reportAnalyticCard = "ANALYTIC_CARD"
export const reportContoPlan = "CONTO_PLAN"


export const typeContoOptions = [
	{label: "ANALITIČKI", value: typeAnalytic}, 
	{label: "SINTETIČKI", value: typeSynthetic}
]

export const statusOptions = [
	{label: "AKTIVAN", value: statusActive},
	{label: "NEAKTIVAN", value: statusInactive}
]

export const typeAccountOptions = [
	{label: "KALKULACIJA", value: typeCalculation}, 
	{label: "IZVOD", value: typeExtract}
]

export const reportOptions = [
	{label: "NALOG ZA KNJIŽENJE", value: reportCreditAccount},
	{label: "KARTICA KONTA SA ANALITIKOM", value: reportAnalyticCard},
	{label: "KONTNI PLAN", value: reportContoPlan},
	{label: "BRUTO BILANS", value: reportGrossBalanceSheet},
]