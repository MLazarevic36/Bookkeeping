import AppRouter from "./routing/AppRouter";
import { BrowserRouter as Router } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/theme"

function App() {
	return (
		<div className="App">
			<ChakraProvider theme={theme}>
				<Router>
					<AppRouter />
				</Router>
			</ChakraProvider>
		</div>
	);
}

export default App;
