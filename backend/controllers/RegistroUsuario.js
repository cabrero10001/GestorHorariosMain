import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const HoraUser = async (req, res) => {
    const data = req.body;
    const fechaLocal = new Date().toLocaleString("sv-SE").replace(" ", "T");
    const FechaISO = fechaLocal+".000Z";
    const verificacion = await prisma.user.findMany({
        where: { numeroDocumento: data.numeroDocumento }
    })
    if (verificacion < 1){
        console.log("El usuario no esta registrado en la base de datos")
        return res.status(500).json({mensaje : "El usuario no existe en la base de datos"})
    } else {
        const entrada = await prisma.Registros.findMany({
            where: { numerodocumento: data.numerodocumento}
        })
        if (entrada.horaE > 0 ){
            const EnvioSalida = await prisma.registros.create(
                {
                    data:{
                        horaS: FechaISO
                    }
            })
        }
        else {
            const EnvioEntrada = await prisma.registros.create(
                {
                    data:{
                        numerodocumento: data.numerodocumento,
                        horaE: FechaISO
                    }
                })
        }
    }
}