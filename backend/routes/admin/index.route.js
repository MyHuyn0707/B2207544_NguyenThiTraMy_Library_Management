const configSystem = require("../../config/system");

const bookRouter = require("./book.route");
const authRouter = require("./auth.route");
const employeeRouter = require("./employee.route");
const authMiddleware = require("../../middlewares/admin/auth.middleware");

module.exports = (app) => {
    const ADMIN_PATH = "/" + configSystem.adminPrefix; // /admin

    app.use(
        ADMIN_PATH + "/books",
        /* authMiddleware.authRequire, */ bookRouter
    ); // /admin/books

    app.use(ADMIN_PATH + "/auth", authRouter); // /admin/auth

    app.use(
        ADMIN_PATH + "/employee", // /admin/employee
        /*  authMiddleware.authRequire, */
        employeeRouter
    );
};
