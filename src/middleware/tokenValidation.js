import jwt from "jsonwebtoken";
export function tokenValidation(req, res, next) {
    const token = req.cookies.authtoken;
    if (!token) {
        return res
            .status(401)
            .json({ message: "Bad Request: user is not authenticated", success: false });
    }
    next();
}