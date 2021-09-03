import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import useUser from "../redux/hooks/useUser";

const HomePage = () => {

	const hook = useUser()

	useEffect(() => {
		hook.fetchData()
	}, [])  //eslint-disable-line
	

	return <Layout>home</Layout>;
};

export default HomePage;
