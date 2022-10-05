const ToDo = require("../models/toDoModel");
const mongoose = require("mongoose");

// get all todos
const getToDos = async (req, res) => {
	// get all and sort by descending order
	const todos = await ToDo.find({}).sort({ createdAt: -1 });

	res.status(200).json(todos);
};

// get a single todo
const getToDo = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such todo item" });
	}

	const todo = await ToDo.findById(id);

	if (!todo) {
		return res.status(404).json({ error: "No such todo item" });
	}

	res.status(200).json(todo);
};

// create new todo
const createToDo = async (req, res) => {
	const { title, duedate } = req.body;

	// check if any of the fields haven't been filled in and create specific error message if so
	let emptyFields = [];
	if (!title) {
		emptyFields.push("title");
	}
	if (!duedate) {
		emptyFields.push("duedate");
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: "Please fill in all the fields", emptyFields });
	}

	// add doc to db
	try {
		const todo = await ToDo.create({ title, duedate });
		res.status(200).json(todo);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// delete a todo
const deleteToDo = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such todo" });
	}

	const todo = await ToDo.findOneAndDelete({ _id: id });

	if (!todo) {
		return res.status(400).json({ error: "No such todo" });
	}

	res.status(200).json(todo);
};

// update a todo
const updateToDo = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such todo item" });
	}

	const todo = await ToDo.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		},
	);

	if (!todo) {
		return res.status(400).json({ error: "No such todo item" });
	}

	res.status(200).json(todo);
};

module.exports = {
	getToDos,
	getToDo,
	createToDo,
	deleteToDo,
	updateToDo,
};
