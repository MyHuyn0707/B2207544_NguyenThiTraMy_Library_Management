const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const nxbSchema = new mongoose.Schema(
    {
        maNXB: {
            type: Number,
            required: true,
            unique: true,
        },
        tenNXB: String,
        diaChi: String,
        slug: {
            type: String,
            slug: "tenNXB",
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

const NhaXuatBan = mongoose.model("NhaXuatBan", nxbSchema, "NhaXuatBan");
module.exports = NhaXuatBan;
