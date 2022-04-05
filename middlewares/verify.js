const jwt = require("jsonwebtoken");

const verifyGuest = async (req, res, next) => {
    try {
        const token = req.cookies["secret"];
        console.log(token);
        const payload = await jwt.verify(token, process.env.SECRET_KEY);
        if (payload) {
            req.userId = payload.userId;
            next();
        }
    } catch (error) {
        console.log("Failed to verify user");
        // console.error(error);
        res.status(500).json("Failed to verify user");
    }
}

module.exports = verifyGuest;