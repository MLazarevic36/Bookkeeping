import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ContoPlanPage from "../pages/ContoPage";

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
	
];

export default routes;
