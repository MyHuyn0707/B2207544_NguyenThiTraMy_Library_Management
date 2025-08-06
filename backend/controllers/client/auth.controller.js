const bcrypt = require("bcrypt");
const Reader = require("../../models/reader.model");
const ApiError = require("../../helpers/api-error");
const ReaderService = require("./../../services/reader.service");

// [POST] /auth/login
module.exports.loginPost = async (req, res, next) => {
    try {
        const enteredEmail = req.body.email;
        const enteredPassword = req.body.password;

        const user = await ReaderService.getReaderByEmail(enteredEmail);

        if (!user) {
            res.json("wrong info");
            return;
        }

        if (!enteredPassword) {
            res.json("wrong info");
            return;
        }

        const isPasswordMatch = await bcrypt.compare(
            enteredPassword,
            user.password
        );

        if (!isPasswordMatch) {
            res.json("wrong info");
            return;
        }

        res.cookie("tokenUser", user.token);
        res.json("success");
    } catch (error) {
        console.log("error:", error);
        return next(new ApiError(500, error));
    }
};

// [GET] /auth/logout
module.exports.logout = async (req, res) => {
    res.clearCookie("tokenUser");
    res.send({
        success: true,
    });
};
