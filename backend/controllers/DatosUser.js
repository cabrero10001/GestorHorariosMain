import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const datosCompletos = async (req, res) => {
    const data = req.body;
    try {
        const verificacion = await prisma.user.findMany({
            where: { numeroDocumento: data.numeroDocumento}
        })
        if (verificacion.length > 0 ){
            console.log("El numero ingresado no existe");
            return res.status(500).json({mensaje : "El usuario no existe en la base de datos"})
        }
        else {
            const obtencion = await prisma.user.findMany({
                data: {
                    primerNombre: data.primerNombre,
                    segundoNombre: data.segundoNombre,
                    primerApellido: data.primerApellido,
                    segundoApellido: data.segundoApellido,
                    numeroDocumento: data.numeroDocumento,
                    correo: data.correo,
                    area: data.area
                }
            })
        }
    }
    catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
}