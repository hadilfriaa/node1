const jwt = require('jsonwebtoken');

//module.exports = (req, res, next) => {
//    try {
//        const token = req.headers.authorization ;
//        const decodToken = jwt.verify(token, 'supersecret');
//        const userId = decodToken.userId
//        if (req.body.userId && req.body.userId!==userId) {
//            throw 'user not valid';
//        } else {
//            next();
//        }
//    } catch (error) {
//        res.status(401).json({error: error})
//    }
//};
function auth(req, res, next) {
    let token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send({
            auth:false,
            token: null,
            message:"missing token, please login"
        })
    }
    jwt.verify(token, process.env.SECRET_JWT,(err, decoded)=>{
        if ((err)) {
            return res.status(401).send({
                auth: false,
                token: null,
                message: "no authorized"
            })
        }
        console.log(decoded);
        next();
    })
    
}
module.exports = auth;
