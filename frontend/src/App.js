import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import TaskList from "./pages/TaskList";
import { useThemeContext } from "./hooks/useThemeContext";

const App = () => {
	const { theme } = useThemeContext();

	return (
		<div className="app" id={theme}>
			<BrowserRouter>
				<Header />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/toBooList" element={<TaskList />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
