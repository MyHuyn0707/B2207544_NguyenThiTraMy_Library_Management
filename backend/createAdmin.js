const bcrypt = require("bcrypt");
const Employee = require("./models/employee.model.js"); // Đường dẫn đúng với cấu trúc của bạn
const crypto = require("crypto"); // Để tạo token

const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/library_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Kết nối MongoDB thành công");
        createAdminAccount(); // Gọi tạo admin sau khi đã kết nối
    })
    .catch((err) => console.error("❌ Lỗi kết nối:", err));

const createAdminAccount = async () => {
    try {
        const saltRounds = 10;

        // Thông tin tài khoản admin mẫu
        const plainPassword = "123456";
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        const token = crypto.randomBytes(32).toString("hex");

        const newAdmin = new Employee({
            fullName: "Admin Master",
            email: "admin@example.com",
            password: hashedPassword,
            token: token,
            address: "123 Admin Street, Admin City",
            phone: "0123456789",
            deleted: false,
        });

        await newAdmin.save();
        console.log("✅ Tài khoản admin đã được tạo thành công!");
    } catch (err) {
        console.error("❌ Có lỗi khi tạo admin:", err);
    }
};
