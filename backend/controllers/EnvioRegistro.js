import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const datosUser = async (req, res) => {
    const data = req.body;
    try {
        const verificacion = await prisma.user.findMany({
            where: { numeroDocumento: data.numeroDocumento }
        })
        if (verificacion.length > 0) {
            console.log("El usuario ya esta registrado en la base de datos")
            return res.status(500).json({mensaje : "El usuario ya existe en la base de datos"})
        } else {
            const EnvioFormulario = await prisma.user.create({
                    data:{
                        primerNombre: data.primerNombre,
                        segundoNombre: data.segundoNombre,
                        primerApellido: data.primerApellido,
                        segundoApellido: data.segundoApellido,
                        numeroDocumento: data.numeroDocumento,
                        correo: data.correo,
                        area: data.area
                    }
                });
                return res.status(200).json({
                    mensaje: "Datos obtenidos correctamente"
                });
        }
    }
    catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
}