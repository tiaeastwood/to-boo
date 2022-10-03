import { useTasksContext } from "../hooks/useTasksContext";

const TaskDetails = ({ task }) => {
	const { dispatch } = useTasksContext();

	const handleClick = async () => {
		const response = await fetch(
			`http://localhost:4000/api/toboolist/${task._id}`,
			{
				method: "DELETE",
			},
		);
		const json = await response.json();
		if (response.ok) {
			dispatch({ type: "DELETE_TASK", payload: json });
		}
	};

	return (
		<div className="task-details">
			<h4>{task.title}</h4>
			<small>
				<strong>Due date: </strong>
				{task.duedate}
			</small>
			<div className="button-container">
				<span
					className="material-symbols-outlined"
					onClick={handleClick}
				>
					delete
				</span>
				<span
					className="material-symbols-outlined"
				>
					edit
				</span>
			</div>
		</div>
	);
};

export default TaskDetails;
