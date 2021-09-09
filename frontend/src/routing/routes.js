import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ContoPlanPage from "../pages/ContoPage";
import AccountPage from "../pages/AccountPage";
import MainBookPage from "../pages/MainBookPage";
import ReportPage from "../pages/ReportPage";

const routes = [
	{
		path: "/login",
		component: LoginPage,
		isPrivate: false,
		isAdmin: false
	},
	{
		path: "/",
		component: HomePage,
		isPrivate: true,
		isAdmin: false
	},
	{
		path: "/conto-plan",
		component: ContoPlanPage,
		isPrivate: true,
		isAdmin: false
	},
	{
		path: "/accounts",
		component: AccountPage,
		isPrivate: true,
		isAdmin: false
	},
	{
		path: "/main-book",
		component: MainBookPage,
		isPrivate: true,
		isAdmin: false
	},
	{
		path: "/reports",
		component: ReportPage,
		isPrivate: true,
		isAdmin: true
	}
	
];

export default routes;
