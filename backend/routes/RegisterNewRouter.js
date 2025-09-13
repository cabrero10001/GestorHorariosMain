import express from 'express';
import { RegistroNewUser } from '../controllers/RegistroNew.js';

const router = express.Router();

router.post('/RegisterNew', RegistroNewUser);

export default router;