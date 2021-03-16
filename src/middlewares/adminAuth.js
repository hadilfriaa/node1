const jwt = require('jsonwebtoken');

function authAdmin(req, res, next) {
    let adminToken = req.headers.authorization;
    if (!adminToken) {
        return res.status(401).send({
            auth: false,
            adminToken: null,
            message:"missing adminToken, please login"
        })
    }
    jwt.verify(adminToken, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                auth: false,
                adminToken: null,
                message:"no authorized"
            })
        }

        console.log(decoded);
        if (!decoded.IsAdmin) {
            return res.status(401).send({
                auth: false,
                adminToken: null,
                message:"Restricted access"
            })
        }
        next();
    })
}

module.exports = authAdmin;
