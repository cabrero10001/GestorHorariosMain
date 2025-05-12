import express from 'express'
import cors from 'cors'

import {
    EnvioRegistroRute,
    RegistroUsuarioRute
} from './routes/router.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', EnvioRegistroRute); //http://localhost:3000/api/EnvioRegistro
app.use('/api', RegistroUsuarioRute); //http://localhost:3000/api/HoraUser


export default app;