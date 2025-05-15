import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const InfoComplete = async (req, res) => {
    const data = req.body;
    try {
        const infoUsers = await prisma.registros.findUnique({
            where: {numerodocumento: data.numerodocumento},
            select:{
                primerNombre: true,
                segundoNombre: true,
                primerApellido: true,
                segundoApellido: true,
                area: true
            }
        });
        const inforHoras = await prisma.user.findUnique({
            where: {numerodocumento: data.numerodocumento},
            select: {
                horaE: true,
                horaS: true
            }
        })
        console.log("Datos enviados");
        return res.status(200).json({
            mensaje: "Datos obtenidos correctamente",
            resultado: obtencion
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}