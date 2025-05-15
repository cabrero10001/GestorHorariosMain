import express from 'express';
import { InfoComplete } from '../controllers/InformacionUser.js'

const router = express.Router();

router.get('/InformacionCompleta', InfoComplete);

export default router;