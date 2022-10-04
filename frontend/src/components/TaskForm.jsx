import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const TaskForm = ({ handleClose }) => {
	const { dispatch } = useTasksContext();
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [completed, setCompleted] = useState(false);
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const task = { title, dueDate, completed };

		const response = await fetch("http://localhost:4000/api/toboolist", {
			method: "POST",
			body: JSON.stringify(task),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle("");
			setDueDate("");
			setCompleted("");
			setError(null);
			setEmptyFields([]);
			console.log("new task added: ", json);
			dispatch({ type: "CREATE_TASK", payload: json });
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a new task:</h3>
			<label htmlFor="title">Task Title:</label>
			<input
				type="text"
				name="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className={emptyFields.includes("title") ? "error" : ""}
			/>
			<label htmlFor="dueDate">Due Date:</label>
			<input
				type="date"
				name="dueDate"
				value={dueDate}
				onChange={(e) => setDueDate(e.target.value)}
				className={emptyFields.includes("dueDate") ? "error" : ""}
			/>
			<button type="submit">Submit</button>

			{error && <div className="error">{error}</div>}

			<button onClick={handleClose}>Cancel</button>
		</form>
	);
};

export default TaskForm;
