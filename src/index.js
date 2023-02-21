import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import todolistRoutes from './routes/todolist.js';

const app = express();
const port = process.env.PORT || 9000;

// middleware (antepone el prefijo /api)
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(express.json());
app.use(cors());
app.use('/api', todolistRoutes);

// CORS

// permitir el acceso desde cualquier origen
app.options('*', cors());
// routes
app.get('/', (req, res) => {
	res.send('Welcome to my API');
});

// mongodb connection
mongoose.set('strictQuery', false);
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('conected got MongoDB Atlas');
		app.listen(port, () => console.log(`server listing on port', ${port}`));
	})
	.catch((error) => console.log('error'));
