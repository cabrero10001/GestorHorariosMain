import express from 'express'
import cors from 'cors'

import {
    EnvioRegistroRute
} from './routes/router.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', EnvioRegistroRute); //http://localhost:3000/api/EnvioRegistro

export default app;