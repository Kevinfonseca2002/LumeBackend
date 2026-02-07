import bcrypt from 'bcrypt'

const encryptedPassword = (originalPassword)=>{
    try {
        
        const salt = bcrypt.genSaltSync(7);
    
        const hash = bcrypt.hashSync(
            originalPassword,
            salt
        )
        return hash
    } catch (error) {
        console.error(error)        
    }
    
}

const validatePassword = (inputPassword, hashedPassword)=>{
    try {
        return bcrypt.compareSync(inputPassword,hashedPassword)
        } catch (error) {
        console.error(error)
    }
}

export {
    encryptedPassword,
    validatePassword
}