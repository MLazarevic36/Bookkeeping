import React from "react";
import { Redirect, Route } from "react-router-dom";
import useUser from "../redux/hooks/useUser";

const AppRoute = ({
  component: Component,
  path,
  isPrivate,
  ...rest
}) => {
	
	const token = useUser().token;

	return (
		<Route
			path={path}
			render={(props) => {
				if(isPrivate && token === "") {
					return <Redirect to={{ pathname: "/login" }} />
				}else if (path === "/login" && token) {
					return <Redirect to={{ pathname: "/" }} />;
				}else{
					return <Component {...props} />;
				}
			}}
			{...rest}
		/>
	);
};

export default AppRoute;
