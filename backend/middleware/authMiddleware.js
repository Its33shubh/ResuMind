let jwt = require('jsonwebtoken')


let authMiddleware = (req, res, next) => {
    try {
        // 1. get header
        let authHeader = req.headers.authorization
        // console.log(authHeader)
        //2. check header is available 
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided"
            })
        }
        // 3. token extract
        let token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "invalid token formate"
            })
        }

        // 4. verify token

        let decode = jwt.verify(token, process.env.JWT_SECRET)

        //5. attach decode token to request

        req.user = decode;

        //6. continue the next process 
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }

}

module.exports = authMiddleware;