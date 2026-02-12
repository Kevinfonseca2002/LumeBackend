import { validatePassword } from "../helpers/bcrypt.helper.js"
import { generateToken } from "../helpers/jwt.helper.js"
import { dbGetUserByEmail } from "../services/users.service.js"

const loginUser = async (req,res)=>{
    try {
        // Paso 1: Buscar el dato por un valor unico en este caso el email
        const data= req.body

        const userFound = await dbGetUserByEmail(data.email)
        if(!userFound){
            res.json({
                msg: 'User not found, please try again'
            })
        }
        
        // Paso 2: Validar contraseña con bcrypt
        const validPassword = await validatePassword(data.password, userFound.password)
       

        if(!validPassword){
            res.json({
                msg: 'Wrong credencials'
            })
        }

        // Paso 3: Crear el payload usando la informacion que trajiste con el valor unico, o sea el email y pasarlo al token
        const payload = {
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            role: userFound.role
        };

        const token = generateToken(payload)
 
        // Paso 4: Transformar el objeto de mongoose (BSON) en (JSON) para poderlo enviar y borrar informacion sensible en este caso la contraseña

        const jsonUser = userFound.toObject();
        delete jsonUser.password;
        
        res.json({ token, user: jsonUser})

        
    } catch (error) {
        console.error(error)
        res.json({ msg: 'Error al intentar loguear al usuario' })
    }
}

const renewToken = async (req,res)=>{
    try {
        //Paso 1: Traemos el payload del request 
        const payload = req.payload
    
        //Paso 2: Verificar que el usuario no fue eliminado por seguridad
        
        const userFound = dbGetUserByEmail(payload.email)
    
        if(!userFound){
            return res.json({
                msg: 'Token can´t be renewed since this user has been deleted'
            })
        }
    
        // Paso 3: Generar el nuevo objeto del token 
        const newPayload = {
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            role: userFound.role
        }
    
        // Paso 4: Generar el nuevo token
    
        const newToken = generateToken(newPayload)
    
        //Paso 5: Pasar de BSON(Mongoose) a JSON(API) y eliminar datos sensibles
    
        const jsonUser = userFound.toObject()
        delete jsonUser.password

        res.json({
            token: newToken, user: jsonUser
        })
        
    } catch (error) {
        console.error(error)
    }
}

export {
    loginUser,
    renewToken
}