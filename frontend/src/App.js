import AppRouter from "./routing/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/theme";
import axios from "axios";
import { base_url } from "./redux/api";
import { GlobalStyles } from "./components/StyledComponentsGlobal";

function App() {

	
    axios.defaults.baseURL = base_url

    axios.interceptors.request.use(function (config) {
        // config.headers.Authorization = `Bearer ${store.getState().user.token}`

        return config
    })

	return (
		<div className="App">
			<GlobalStyles />
			<ChakraProvider theme={theme}>
				<Router>
					<AppRouter />
				</Router>
			</ChakraProvider>
		</div>
	);
}

export default App;
