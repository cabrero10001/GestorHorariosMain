import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const RegistroNewUser = async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        const usuarioExistente = await prisma.user.findFirst({
            where: { numeroDocumento: data.numeroDocumento }
        });

        if (usuarioExistente) {
            return res.status(409).json({error: "El usuario ya existe en la base de datos"})
        };

        const envioRegistro = await prisma.user.create (
            {
                data: {
                    "primerNombre": data.primerNombre,
                    "segundoNombre": data.segundoNombre,
                    "primerApellido": data.primerApellido,
                    "segundoApellido": data.segundoApellido,
                    "numeroDocumento": data.numeroDocumento,
                    "correo": data.correo,
                    "area": data.area
                }
            }
        );
        return res.status(200).json({proceso: "ususario registrado con exito"});
    } catch (error) {
        console.log("Error al registrar al usuario ", error);
        res.status(500).json({error:"Error interno del servidor al registrar al usuario"});
    }
}