import * as React from "react";
import { useThemeContext } from "../hooks/useThemeContext";

const ThemeSwitch = () => {
	const { theme, toggleTheme } = useThemeContext();

	return (
		<label className="toggle-switch">
			<input type="checkbox" onChange={toggleTheme} />
			<span className="switch" />
		</label>
	);
};

export default ThemeSwitch;
