import { validateToken } from "../helpers/jwt.helper.js";
import { dbGetUserById } from "../services/users.service.js";

const authenticationUser = async (req, res, next) => {
  try {
    // Paso 1: Extraer el token del header
    const authHeader = req.header("Authorization");
    console.log('1. Header completo:', authHeader)

    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log('2. Token extraído:', token)

    // Paso 2: Validar que el token exista
    if (!token) {
      return res.status(401).json({
        msg: "Error: Cadena del token vacia",
      });
    }

    // Paso 2.5: Validar el formato del token (Debe tener 3 partes separadas por puntos)
    const tokenParts = token.split(".");
    console.log('3. Partes del token:', tokenParts.length)
    if (tokenParts.length !== 3) {
      return res.status(400).json({
        msg: "Error: Formato de token invalido (Faltan componentes)",
      });
    }

    // Paso 3: Extraer el payload del token (decodificarlo)
    const payload = validateToken(token);
    console.log('4. Payload:', payload)

    if (!payload) {
      return res.status(401).json({
        msg: "Error: Token invalido o expirado",
      });
    }

    // Paso 5: Consultar la existencia del usuario en la base de datos
    const user = await dbGetUserById(payload.id);
     console.log('5. Usuario encontrado:', user)

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Token no valido - usuario no existe en DB" });
    }


    // Paso 7: Enviar el payload a traves el objeto Request
    req.payload = payload;
    req.user = user; // OPCIONAL: Enviar el usuario completo si se requiere en endpoints posteriores

    // Paso 8: El pasamos el control del flujo de la aplicacion a la siguiente funcion
    next();
  } catch (error) {
    console.error('ERROR COMPLETO:', error) ;
    res.json({ msg: "Error token invalido" });
  }
};

export default authenticationUser;
