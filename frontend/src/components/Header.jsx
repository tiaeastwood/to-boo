import YinYangGhosts from "../images/yinyang_ghosts.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<h1>ToBoo</h1>
			</Link>
		</header>
	);
};

export default Header;
