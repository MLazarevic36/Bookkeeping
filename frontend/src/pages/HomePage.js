import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import useCompany from "../redux/hooks/useCompany";
import useUser from "../redux/hooks/useUser";

const HomePage = () => {

	const hook = useUser()
	const hookCompany = useCompany()

	useEffect(() => {
		hook.fetchData()
	}, [])  //eslint-disable-line
	

	return <Layout>home</Layout>;
};

export default HomePage;
