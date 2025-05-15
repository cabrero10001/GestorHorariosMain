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
            const verificacionDoc = await prisma.registros.findMany({
                where: {numerodocumento: data.numerodocumento}
            });
            if (verificacionDoc > 0){
                const salida = await prisma.registros.create({
                    data: {
                        numerodocumento: data.numerodocumento,
                        horaS: FechaISO
                    }
                });
                console.log("Entrada Registrada");
                return res.status(200).json({
                    mensaje: "Hora de entrada registrada",
                    resultado: salida
                });
            }
            else {
                const entrada = await prisma.registros.create({
                    data: {
                        horaE: FechaISO
                    }
                });
                console.log("Salida Registrada");
                return res.status(200).json({
                    mensaje: "Hora de Salida registrada",
                    resultado: entrada
                });
            }
        }
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}