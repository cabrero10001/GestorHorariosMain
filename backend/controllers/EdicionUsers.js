import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const datosCompletos = async (req, res) => {
    const data = req.body;
    try {
        const Datos = await prisma.user.update({
            where:{numeroDocumento: data.numeroDocumento},
            data:{
                primerNombre: data.primerNombre,
                segundoNombre: data.segundoNombre,
                primerApellido: data.primerApellido,
                segundoApellido: data.segundoApellido,
                correo: data.correo,
                area: data.area
            }
        });
        console.log("Datos Actualizados");
        return res.status(200).json({
            mensaje: "Datos actualizados correctamente",
            resultado: Datos
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}