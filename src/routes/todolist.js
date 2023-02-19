import express from 'express';
// import { todoSchema } from '../models/todo.js';
import {
	createNewController,
	deleteTodoController,
	getController,
	getLineController,
} from '../controllers/newController.js';

const router = express.Router();

// create Todo
router.post('/new', createNewController);

// get all Todos
router.get('/todos', getController);

//Delete Todo
router.delete('/todos/delete/:id', deleteTodoController);

//Line through Todo
router.get('/todos/complete/:id', getLineController);

export default router;
