import { Link } from "react-router-dom";
import Ghost from "../images/ghost.png"
import Button from "react-bootstrap/Button";
import { useThemeContext } from "../hooks/useThemeContext";

const Home = () => {
	const { theme, toggleTheme } = useThemeContext();

	return (
		<div className={theme === "dark" ? "home page light-text" : "home page dark-text"}>
			<h1>Hey, Boo!</h1>
			<img src={Ghost} alt="cute ghost" />
			<p className="home-text">
				Welcome to <strong>Toboo</strong>, an app to help you balance your
				unfinished business!
			</p>
			<Link to="/toBooList">
				<Button variant="dark">Get started!</Button>
			</Link>
		</div>
	);
};

export default Home;
