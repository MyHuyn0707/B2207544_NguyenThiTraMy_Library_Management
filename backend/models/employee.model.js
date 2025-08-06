const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const nhanVienSchema = new mongoose.Schema(
    {
        maNV: {
            type: Number,
            unique: true,
            required: true,
        },
        hoTen: String,
        ngaySinh: Date,
        chucVu: String,
        diaChi: String,
        soDienThoai: String,
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

const NhanVien = mongoose.model("NhanVien", nhanVienSchema, "NhanVien");

module.exports = NhanVien;
