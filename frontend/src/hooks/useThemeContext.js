import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export const useThemeContext = () => {
	const context = useContext(ThemeContext);

	// if there is no value for the context, throw an error
	if (!context) {
		throw Error("useThemeContext must be used inside a ThemeContext Provider");
	}

	return context;
};
