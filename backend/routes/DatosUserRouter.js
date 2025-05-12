import express from 'express';
import { datosCompletos } from '../controllers/DatosUser.js'

const router = express.Router();

router.post('/datosCompletos', datosCompletos);

export default router;