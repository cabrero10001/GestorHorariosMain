import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const datosCompletos = async (req, res) => {
    const data = req.body;
    try {
        const obtencionUsers = await prisma.user.findMany({
            select: {
                primerNombre: true,
                segundoNombre: true,
                primerApellido: true,
                segundoApellido: true,
                area: true
            }
        });
        console.log("Datos enviados");
        return res.status(200).json({
            mensaje: "Datos obtenidos correctamente",
            resultado: obtencionUsers
        });
    } catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
};
