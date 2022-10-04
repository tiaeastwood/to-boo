import YinYangGhosts from "../images/yinyang_ghosts.png"
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<img src={YinYangGhosts} alt="ToBoologo" />
			</Link>
			<h1>ToBoo</h1>
		</header>
	);
};

export default Header;
