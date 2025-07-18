import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const datosCompletos = async (req, res) => {
    const data = req.body;

    try {
        const obtencionResgitros = await prisma.registros.findMany({
            select:{
                horaE: true,
                horaS: true
            }
        });
        const obtencionUsers = await prisma.user.findMany({
            select: {
                primerNombre: true,
                primerApellido: true
            }
        });
        const resultadoCombinado = {
            usuarios: obtencionUsers,
            registros: obtencionResgitros
        };

        console.log("Datos enviados");
        return res.status(200).json({
            mensaje: "Datos obtenidos correctamente",
            resultado: resultadoCombinado
        });
    } catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
};
