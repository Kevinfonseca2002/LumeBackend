const authorizationUser = (allowedRoles = []) => {
    return (req, res, next) => {
        try {
            const { role } = req.payload;

            if (!role) {
                return res.status(403).json({
                    msg: 'Error: No tiene permisos (Rol no definido)'
                });
            }

            if (!allowedRoles.includes(role)) {
                return res.status(403).json({
                    msg: `Error: El rol '${role}' no esta autorizado para esta accion`
                });
            }

            console.log(`Usuario autorizado con rol: ${role}`);
            next();

        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error de autorizacion del servidor' });
        }
    }
}


export default authorizationUser;