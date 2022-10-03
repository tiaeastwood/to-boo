import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="page">
			<h1>Hey, Boo!</h1>
			<p>
				Welcome to Toboo, an app to help you balance your unfinished business.
			</p>
			<Link to="/toBooList">
				<button className="welcome-button">Get started!</button>
			</Link>
		</div>
	);
};

export default Home;
