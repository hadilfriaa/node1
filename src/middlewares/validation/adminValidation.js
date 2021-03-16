const Joi = require('joi');

const adminAuth = (req,res,next) =>{
    const adminAuthSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        telephone: Joi.number().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        IsAdmin: true,
    });

    const validationAdmin = adminAuthSchema.validate(req.body);

    console.log(validationAdmin);

    if (validationAdmin.error) {
        return res.send({
            error: validationAdmin.error
        })

    }else{
        next();
    }
    
}

module.exports = adminAuth;