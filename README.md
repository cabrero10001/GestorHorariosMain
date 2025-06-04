## Gesto de horarios
**Descripcion:** Este proyecto se realizo con la intencion de tener un control y registro de entradas y salidas de un personal y tener un registro basado en un calendario.
## Tecnologias Usadas
- 🔧 **Backend:** Node.js, Javascript
- 💾 **Bases de datos:** Mysql + prisma ORM
## Estrucutra del proyecto

```bash
├── backend/
│   └── controllers/
│   │   ├── DarosUser.js
│   │   ├── EdicionUser.js
│   │   ├── EnvioRegistro.js
│   │   ├── GetUsuarios.js
│   │   ├── InformacionUser.js
│   │   └── RegistroUsuario.js
│   └── genterated/
│   └── node_modules/
│   └── prisma/
│   │   ├── schema.prisma
│   └── routes/
│   │   ├── DatosUserRouter.js
│   │   ├── EdicionUserRouter.js
│   │   ├── EnvioRegistroRouter.js
│   │   ├── GetUsuarioRouter.js
│   │   ├── InformacionUserRouter.js
│   │   ├── RegistroUsuarioRouter.js
│   │   └── router.js
│   └── .env
│   └── .gitignore
│   └── app.js
│   └── package-lock.json
│   └── package.json
│   └── server.js
└── README.md
```
## Instalación
1. Clonacion de repositorio y accede al archivo principal
```bash
    git clone https://github.com/cabrero10001/GestorHorariosMain.git
    cd GestorHorariosMain/backend
```
2. Instala las dependencias
```bash
    npm i
```
3. Configura el URL de tu base de datos en tu .env
```bash
    DATABASE_URL="mysql://usuario:contraseña@Host:puerto/dbname"
    PORT=numeroPuerto #En caso de que sea necesario 
```
4. Ejecuta las migraciones del modelo
```bash
    npx prisma migrate
    npx prisma db push
```
5. Inicia el servidor
```bash
    npm run dev
```

## Endpoints Disponibles

| METODO | ENDPOINT | DESCRIPCION |
|--------------|--------------|--------------|
| POST | /api/EnvioRegistro | Resgistro de nuevo usuario |
| POST | /api/RegistroHora | Registro de Horas |
| GET | /api/datosCompletos | Datos para calendario |
| GET | /api/InformacionCompleta | Datos para edicion en el calendario |
| POST | /api/EdicionUser | Actualizacion de datos user |
| GET | /api/GetUsuarios | Informacion de usuarios |

## Modelo de base datos Prisma

```prisma
model User {
  id                String       @default(uuid())
  primerNombre      String
  segundoNombre     String? 
  primerApellido    String
  segundoApellido   String
  numeroDocumento   String       @id
  correo            String 
  area              String
  registros         Registros[]  // relación uno-a-muchos
}

model Registros {
  id                String    @id @default(uuid())
  horaE             String?
  horaS             String?
  // relación muchos-a-uno
  numeroDocumento            String
  user    User @relation(fields: [numeroDocumento], references: [numeroDocumento])
}
```
## Seguridad
- CORS Habilitado solo para frontend autorizado.
- Variables de entorno protegidas (.env)

## Licencias
- Protegido bajo entidad privada






















