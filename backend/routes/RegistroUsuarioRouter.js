import express from 'express';
import { HoraUser } from '../controllers/RegistroUsuario.js'

const router = express.Router();

router.post('/RegistroHora', HoraUser);

export default router;