const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const sachSchema = new mongoose.Schema(
    {
        maSach: {
            type: Number,
            unique: true,
            required: true,
        },
        tenSach: String,
        tacGia: String,
        namXuatBan: String,
        maNXB: {
            type: Number,
            required: true,
            ref: "NhaXuatBan",
        },
        gia: Number,
        soLuong: Number,
        anhBia: String,
        slug: {
            type: String,
            slug: "tenSach",
            unique: true,
        },
        daXoa: {
            type: Boolean,
            default: false,
        },
        ngayXoa: Date,
    },
    { timestamps: true }
);

const Sach = mongoose.model("Sach", sachSchema, "Sach");
module.exports = Sach;
