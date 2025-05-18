import express from 'express';
import { datosCompletos } from '../controllers/EdicionUsers.js';

const router = express.Router();

router.post('/EdicionUser', datosCompletos);

export default router;