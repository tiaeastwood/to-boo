import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksContextProvider } from "./contexts/tasksContext";
import { ThemeContextProvider } from "./contexts/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TasksContextProvider>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</TasksContextProvider>
	</React.StrictMode>,
);
