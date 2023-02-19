import mongoose from 'mongoose';

export  const todoSchema = mongoose.Schema({
	text: {
		type: 'string',
		required: true,
	},
	complete: {
		type: 'boolean',
		default: false,
	},
	timestamp: {
		type: 'string',
		default: Date.now(),
	},
});


