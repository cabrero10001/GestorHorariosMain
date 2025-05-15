import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const InfoComplete = async (req, res) => {
    const data = req.body;
    try {
        const infoUsers = await prisma.user.findFirst({
            where: {
                numeroDocumento: data.numeroDocumento
            },
            select:{
                primerNombre: true,
                segundoNombre: true,
                primerApellido: true,
                segundoApellido: true,
                area: true
            }
        });
        const infoHoras = await prisma.registros.findFirst({
            where: {numerodocumento: data.numerodocumento},
            select: {
                horaE: true,
                horaS: true
            }
        });
        const resultadoCombinado = {
            ...infoUsers,
            ...infoHoras
        };
        console.log("Datos enviados");
        return res.status(200).json({
            mensaje: "Datos obtenidos correctamente",
            resultado: resultadoCombinado,
            
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}