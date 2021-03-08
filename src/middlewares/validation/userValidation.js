const Joi = require('joi');

const userValidation = (req,res,next) =>{
    const userValidationSchema = Joi.object({
        firstName: Joi.string().regex(/^[A-Z]+$/).uppercase().required(),
        lastName: Joi.string().regex(/^[A-Z]+$/).uppercase().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const validation = userValidationSchema.validate(req.body);

    console.log(validation);

    if (validation.error) {
        return res.send({
            error: validation.error
        })

    };
    next();
}

module.exports = userValidation;