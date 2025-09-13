import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const LoginUser = async (req, res) => {
    const data = req.body;
    console.log("Información recibida:", data);

    try {
        // Buscar usuario por username
        const usuarioExistente = await prisma.userLogin.findFirst({
            where: { username: data.username }
        });

        console.log("Usuario encontrado:", usuarioExistente);

        if (!usuarioExistente) {
            return res.status(404).json({ error: "El usuario no existe" });
        }

        // Comparar contraseñas en texto plano
        if (data.password !== usuarioExistente.password) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        return res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            usuario: usuarioExistente
        });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
