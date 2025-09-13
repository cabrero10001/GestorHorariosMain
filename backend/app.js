import express from 'express'
import cors from 'cors'

import {
    EnvioRegistroRute,
    RegistroUsuarioRute,
    DatosUserRute,
    InfoCompleteRute,
    EdicionUserRute,
    GetUsuariosRute,
    LoginUser,
    RegisterUser,
    RegisterNew
} from './routes/router.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', EnvioRegistroRute); //http://localhost:3000/api/EnvioRegistro
app.use('/api', RegistroUsuarioRute); //http://localhost:3000/api/RegistroHora
app.use('/api', DatosUserRute); //http://localhost:3000/api/datosCompletos
app.use('/api', InfoCompleteRute); //http://localhost:3000/api/InformacionCompleta
app.use('/api', EdicionUserRute); //http://localhost:3000/api/EdicionUser
app.use('/api', GetUsuariosRute); //http://localhost:3000/api/GetUsuarios
app.use('/api', LoginUser); //http://localhost:3000/api/Login
app.use('/api', RegisterUser); //http://localhost:3000/api/Register
app.use('/api', RegisterNew); //http://localhost:3000/api/RegisterNew



export default app;