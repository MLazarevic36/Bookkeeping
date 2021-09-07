import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ContoPlanPage from "../pages/ContoPage";
import AccountPage from "../pages/AccountPage";
import MainBookPage from "../pages/MainBookPage";

const routes = [
	{
		path: "/login",
		component: LoginPage,
		isPrivate: false,
	},
	{
		path: "/",
		component: HomePage,
		isPrivate: false,
	},
	{
		path: "/conto-plan",
		component: ContoPlanPage,
		isPrivate: false,
	},
	{
		path: "/accounts",
		component: AccountPage,
		isPrivate: false,
	},
	{
		path: "/main-book",
		component: MainBookPage,
		isPrivate: false
	}
	
];

export default routes;
