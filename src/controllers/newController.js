import mongoose from 'mongoose';
import { todoSchema } from '../models/todo.js';

const newSchema = mongoose.model('new', todoSchema);
export const createNewController = (req, res) => {
	const todo = newSchema(req.body);

	todo.save()
		// retorna
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
};

export const getController = async (req, res) => {
	// objeto Schema
	await newSchema

		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
};

export const deleteTodoController = async (req, res) => {
	const { id } = req.params;
	await newSchema

		.remove({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
};
export const getLineController = async (req, res) => {
	const todo = await newSchema.findById(req.params.id);

	if (!todo) {
		return res.status(404).json({ message: 'Todo not found' });
	}

	todo.complete = !todo.complete;
	todo.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
};
