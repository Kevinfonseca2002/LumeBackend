import jwt from "jsonwebtoken";

// Aqui necesito crear el password para la contraseña, recuerda que el JWT tiene tres partes: Header/Payload/Signature

const generateToken = (payload)=>{
    try {
        return jwt.sign(
            payload,
            process.env.JWT_SEED,
            {expiresIn: "1h"}
        )
        
    } catch (error) {
        console.error(error
        )        
    }
}

const validateToken = (token,)=>{
    try {
       return jwt.verify(
            token,
            process.env.JWT_SEED
        ) 
    } catch (error) {
        console.error(error)
    }
}


export {
    generateToken,
    validateToken

}