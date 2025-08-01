const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.json({ message: "Server hoạt động tốt!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
