import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";

const TaskForm = () => {
	const { dispatch } = useTasksContext();
	const [title, setTitle] = useState("");
	const [duedate, setduedate] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const task = { title, duedate };

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
			setduedate("");
			setError(null);
			setEmptyFields([]);
			dispatch({ type: "CREATE_TASK", payload: json });

			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 3000);
		}
	};

	return (
		<Form className="task-Form" onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicTitle">
				<Form.Label>Task Title:</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter task"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicDate">
				<Form.Label>Due Date:</Form.Label>
				<Form.Control
					type="date"
					onChange={(e) => setduedate(e.target.value)}
					value={duedate}
				/>
			</Form.Group>
			<div className="d-grid gap-2">
				<Button variant="primary" size="lg" type="submit">
					Submit
				</Button>
			</div>

			<div className="message-area">
				{showSuccess && (
					<div>
						<p>Task Added!</p>
					</div>
				)}
				{error && <div className="error">{error}</div>}
			</div>
		</Form>
	);
};

export default TaskForm;
