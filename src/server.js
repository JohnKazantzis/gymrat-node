import express from 'express';
import { router } from './router.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/status', (req, res) => {
    res.status(200);
    res.json({ status: 'The server is up and running' })
});

app.use('/api', router);

export default app;