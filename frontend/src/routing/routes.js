import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

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
];

export default routes;
