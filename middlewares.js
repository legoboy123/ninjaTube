import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Ninja-Tube";
    res.locals.routes = routes;
    next();
};