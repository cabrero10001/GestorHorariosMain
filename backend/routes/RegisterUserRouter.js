import express from 'express';
import { RegistroUser } from '../controllers/RegisterUser.js';

const router = express.Router();

router.post('/Register', RegistroUser);

export default router;