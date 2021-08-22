import React from "react";
import AppRoute from "./AppRoute";
import { Switch } from "react-router-dom";
import routes from "./routes";

const AppRouter = () => {
	return (
		<Switch>
			{routes.map((route, i) => (
				<AppRoute
					key={i}
					path={route.path}
					component={route.component}
					isPrivate={route.isPrivate}
					exact={true}
				/>
			))}
		</Switch>
	);
};

export default AppRouter;
