import { TasksContext } from "../contexts/tasksContext";
import { useContext } from "react";

export const useTasksContext = () => {
	const context = useContext(TasksContext);

	// if there is no value for the context, throw an error
	if (!context) {
		throw Error("useTasksContext must be used inside a TasksContext Provider");
	}

	return context;
};
