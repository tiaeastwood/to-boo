import YinYangGhosts from "../images/yinyang_ghosts.png";

const Loading = () => {
	return (
		<div className="loading-container">
			<img src={YinYangGhosts} alt="loading" className="loading-image" />
		</div>
	);
};

export default Loading;
