import { Link } from "react-router-dom";
import Ghost from "../images/ghost.png"
import Button from "react-bootstrap/Button";

const Home = () => {
	return (
		<div className="page home">
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
