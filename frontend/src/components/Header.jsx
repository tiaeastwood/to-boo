import ThemeSwitch from "../components/ThemeSwitch";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<h1>ToBoo</h1>
			</Link>
			<ThemeSwitch />
		</header>
	);
};

export default Header;
