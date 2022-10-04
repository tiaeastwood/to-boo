import { useEffect } from "react";
import TaskDetails from "../components/TaskDetails";
import { useTasksContext } from "../hooks/useTasksContext";
import Loading from "../components/Loading";

const Home = () => {
	const { tasks, dispatch } = useTasksContext();

	useEffect(() => {
		const fetchTasks = async () => {
			const response = await fetch("http://localhost:4000/api/toboolist");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_TASKS", payload: json });
			}
		};

		fetchTasks();
	}, [dispatch]);

	if (!tasks) {
		return <Loading />;
	}

	return (
		<div className="home">
			<div className="tasks-container">
				{tasks &&
					tasks.map((task, index) => (
						<TaskDetails key={task._id + index} task={task}>
							{task.title}
						</TaskDetails>
					))}
			</div>
			{/* add the form */}
		</div>
	);
};

export default Home;
