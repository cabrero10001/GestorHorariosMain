import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const HoraUser = async (req, res) => {
    const data = req.body;
    const fechaLocal = new Date().toLocaleTimeString("sv-SE", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const FechaISO = fechaLocal; // Ya no usamos .000Z si guardas como string

    try {
        const verificacion = await prisma.user.findMany({
            where: { numeroDocumento: data.numeroDocumento }
        });

        if (verificacion.length < 1) {
            console.log("El usuario no está registrado en la base de datos");
            return res.status(500).json({ mensaje: "El usuario no existe en la base de datos" });
        } else {
            const verificacionDoc = await prisma.registros.findMany({
                where: { numeroDocumento: data.numeroDocumento }
            });

            if (verificacionDoc.length > 0) {
                const registro = await prisma.registros.findFirst({
                    where: {
                        numeroDocumento: data.numeroDocumento,
                        horaS: null
                    }
                });
                if(registro){
                    const salida = await prisma.registros.update({
                        where:{
                            id: registro.id,
                            horaS: null
                        },
                        data: {
                            horaS: FechaISO,
                            user: {
                                connect: {
                                    numeroDocumento: data.numeroDocumento
                                }
                            }
                        }
                    });
                    console.log("Salida Registrada");
                    return res.status(200).json({
                        mensaje: "Hora de salida registrada",
                        resultado: salida
                    });
                }
                else{
                    console.log("No se encontró un registro que coincida");
                }
                
            } else {
                const entrada = await prisma.registros.create({
                    data: {
                        horaE: FechaISO,
                        user: {
                            connect: {
                                numeroDocumento: data.numeroDocumento
                            }
                        }
                    }
                });
                console.log("Entrada Registrada");
                return res.status(200).json({
                    mensaje: "Hora de entrada registrada",
                    resultado: entrada
                });
            }
        }
    } catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
};
