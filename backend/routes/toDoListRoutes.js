const express = require("express");
const {
	getToDos,
	getToDo,
	createToDo,
	deleteToDo,
	updateToDo,
} = require("../controllers/toDoControllers");
const router = express.Router();

// get all
router.get("/", getToDos);

// get a single todo
router.get("/:id", getToDo);

// post a single todo
router.post("/", createToDo);

// delete a single todo
router.delete("/:id", deleteToDo);

// update (patch) a single todo
router.patch("/:id", updateToDo);

module.exports = router;
