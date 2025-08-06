const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const docGiaSchema = new mongoose.Schema(
    {
        maDocGia: {
            type: Number,
            unique: true,
            required: true,
        },
        hoTen: String,
        ngaySinh: Date,
        gioiTinh: Boolean, // 0: Nữ, 1: Nam
        diaChi: String,
        dienThoai: String,
        // Thêm các trường liên quan đến đăng nhập
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            default: null,
        },

        daXoa: {
            type: Boolean,
            default: false,
        },
        ngayXoa: Date,
    },
    { timestamps: true }
);

const DocGia = mongoose.model("DocGia", docGiaSchema, "DocGia");
module.exports = DocGia;
