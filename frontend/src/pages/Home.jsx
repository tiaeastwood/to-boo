import { Link } from "react-router-dom";
import YinYangGhosts from "../images/yinyang_ghosts.png"

const Home = () => {
	return (
		<div className="page home">
			<h1>Hey, Boo!</h1>
			<img src={YinYangGhosts} alt="toboo ghost logo"/>
			<p className="home-text">
				Welcome to Toboo, an app to help you balance your unfinished business!
			</p>
			<Link to="/toBooList">
				<button className="welcome-button">Get started!</button>
			</Link>
		</div>
	);
};

export default Home;
