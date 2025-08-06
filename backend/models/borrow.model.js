const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const theoDoiMuonSachSchema = new mongoose.Schema(
    {
        maDocGia: {
            type: Number,
            ref: "DocGia",
            required: true,
        },
        maSach: {
            type: Number,
            ref: "Sach",
            required: true,
        },
        maNV: {
            type: Number,
            ref: "NhanVien",
        },
        ngayMuon: Date,
        ngayTra: Date,
        daXoa: {
            type: Boolean,
            default: false,
        },
        ngayXoa: Date,
        // Thêm trường trạng thái với 3 lựa chọn
        trangThai: {
            type: Number,
            // 0: Chờ duyệt, 1: Đang mượn, 2: Đã trả
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const TheoDoiMuonSach = mongoose.model(
    "TheoDoiMuonSach",
    theoDoiMuonSachSchema,
    "TheoDoiMuonSach"
);
module.exports = TheoDoiMuonSach;
