import express from 'express';
import { datosUser } from '../controllers/EnvioRegistro.js'

const router = express.Router();

router.post('/EnvioRegistro', datosUser);

export default router;