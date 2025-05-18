import express from 'express';
import { datosCompletos } from '../controllers/GetUsuarios.js'

const router = express.Router();

router.get('/GetUsuarios', datosCompletos);

export default router;