const authorization = (req, res, next) => {
    const allRoles = JSON.parse(fs.readFileSync("./permition.json", "utf-8"));
    if (
        req.body.role &&
        allRoles[req.body.role] &&
        allRoles[req.body.role].permitedMethod.includes(req.method) &&
        allRoles[req.body.role].permitedRoutes.includes(req.url)
    ) {
        next();
    } else {
        res.status(403).json({ error: `you are not authorized` });
    }
    };
    
module.exports = { authorization };