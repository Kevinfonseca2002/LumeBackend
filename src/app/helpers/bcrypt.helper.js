import bcrypt from 'bcrypt'

const encryptedPassword = async (originalPassword)=>{
    try {
        
        const salt =await bcrypt.genSalt(7);
    
        return await bcrypt.hash( originalPassword, salt )

    } catch (error) {
        console.error(error)        
    }
    
}

const validatePassword = async (inputPassword, hashedPassword)=>{
    try {
        return await bcrypt.compare(inputPassword,hashedPassword)
        } catch (error) {
        console.error(error)
    }
}

export {
    encryptedPassword,
    validatePassword
}