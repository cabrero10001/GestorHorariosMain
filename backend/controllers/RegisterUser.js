import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const RegistroUser = async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        const usuarioExistente = await prisma.userLogin.findFirst({
            where: { username: data.username }
        })

        if (usuarioExistente) {
            return res.status(409).json({error: "El usuario ya existe en la base de datos"})
        }

        const envioRegistro = await prisma.userLogin.create (
            {
                data: {
                    "username": data.username,
                    "password": data.password
                }
            }
        )
        return res.status(200).json({proceso: "ususario registrado con exito"})
    } catch (error) {
        console.log("Error al registrar al usuario ", error)
        res.status(500).json({error:"Error interno del servidor al registrar al usuario"})
    }
}