import express from 'express';
import { LoginUser } from '../controllers/LoginUser.js';

const router = express.Router();

router.post('/Login', LoginUser)

export default router;