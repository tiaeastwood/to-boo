import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import TaskList from "./pages/TaskList";

const App = () => {
	return (
		<div className="app">
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
