const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const moment = require("moment");

const clientRoute = require("./routes/client/index.route");
const adminRoute = require("./routes/admin/index.route");
const systemPrefix = require("./config/system");

require("dotenv").config();

// Connect database
const database = require("./config/database");
database.connect();

const app = express();
const port = process.env.PORT;

// Cấu hình cookies & session
app.use(cookieParser("KWJFKWEIFHW"));
app.use(
    session({
        secret: "KWJFKWEIFHW",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 },
    })
);

// Dịch vụ tĩnh (thư mục public)
app.use(express.static("public"));

// Override phương thức HTTP (PUT, DELETE qua form)
app.use(methodOverride("_method"));

// Cho phép CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Flash
// app.use(cookieParser("KWJFKWEIFHW"));
// app.use(session({ cookie: { maxAge: 60000 } }));
// app.use(flash());
// End Flash

// TinyMCE
app.use(
    "/tinymce",
    express.static(path.join(__dirname, "node_modules", "tinymce"))
);
// End TinyMCE

// Variables
app.locals.adminPrefix = systemPrefix.adminPrefix;
app.locals.moment = moment;

// Routes
clientRoute(app);
adminRoute(app);

app.get("/", (req, res) => {
    res.send("Backend đang chạy!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
