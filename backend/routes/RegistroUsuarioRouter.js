import express from 'express';
import { HoraUser } from '../controllers/RegistroUsuario.js'

const router = express.Router();

router.post('/HoraUser', HoraUser);

export default router;