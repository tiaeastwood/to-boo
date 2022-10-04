import { useTasksContext } from "../hooks/useTasksContext";

const TaskDetails = ({ task }) => {
	const { dispatch } = useTasksContext();

	const handleDelete = async () => {
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

	const handleEdit = async () => {
		const detailsToEdit = {}
		const response = await fetch(
			`http://localhost:4000/api/toboolist/${task._id}`,
			{
				method: "PATCH",
				body: JSON.stringify(detailsToEdit),
			},
		);
		const json = await response.json();
		if (response.ok) {
			dispatch({ type: "EDIT_TASK", payload: json });
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
				<button className="material-symbols-outlined transparent-button">
					edit
				</button>
				<button
					className="material-symbols-outlined transparent-button"
					onClick={handleDelete}
				>
					delete
				</button>
			</div>
		</div>
	);
};

export default TaskDetails;
