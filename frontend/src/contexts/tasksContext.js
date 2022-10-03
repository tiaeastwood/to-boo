import { createContext, useReducer } from "react";

export const TasksContext = createContext();

export const tasksReducer = (state, action) => {
	switch (action.type) {
		case "SET_TASKS":
			return {
				tasks: action.payload,
			};
		case "CREATE_TASK":
			return {
				tasks: [action.payload, ...state.tasks],
			};
		case "DELETE_TASK":
			return {
				tasks: state.tasks.filter((t) => t._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const TasksContextProvider = ({ children }) => {
	// gets back a state value and function to update state value
	const [state, dispatch] = useReducer(tasksReducer, { tasks: null });

	console.log("state --->", state);

	return (
		<TasksContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
};

// This context provider wraps the root App component (in index.js)
// App is then a child component
// the value in the TasksContext.Provider is available to all components in the App
