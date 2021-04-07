const Joi = require('joi');

const userValidation = (req,res,next) =>{
    const userValidationSchema = Joi.object({
        firstName: Joi.string().uppercase().required(),
        lastName: Joi.string().uppercase().required(),
        telephone: Joi.number().required(),
        email: Joi.string().email().required(),
        IsAdmin: Joi.boolean(),
        password: Joi.string().required(),
        address: Joi.object().required(),
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