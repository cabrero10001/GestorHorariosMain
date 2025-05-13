import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const HoraUser = async (req, res) => {
    const data = req.body;
    const fechaLocal = new Date().toLocaleString("sv-SE").replace(" ", "T");
    const FechaISO = fechaLocal+".000Z";
    try {
        const verificacion = await prisma.user.findMany({
            where: { numeroDocumento: data.numeroDocumento }
        })
        if (verificacion < 1){
            console.log("El usuario no esta registrado en la base de datos")
            return res.status(500).json({mensaje : "El usuario no existe en la base de datos"})
        } else {
            const entrada = await prisma.registros.create({
                data: {
                    numerodocumento: data.numerodocumento,
                    horaE : FechaISO,
                    horaS: null
                }
            });
            console.log("Hora de entrada registrada")
            return res.status(200).json({
                mensaje: "Hora de entrada registrada",
                resultado: entrada
            });
        }
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}