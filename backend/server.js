import express from 'express';
import cors from 'cors';
import restaurants from './api/restaurants.route.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurants');
