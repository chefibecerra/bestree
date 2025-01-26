import express from 'express'; // ESM
import router from './router';
import { connectDB } from './config/db';
import 'dotenv/config';

const app = express();

// Nos conectamos a la base de datos mongodb
connectDB();

// Leer datos de formualarios
app.use(express.json());

app.use(router);

export default app; 