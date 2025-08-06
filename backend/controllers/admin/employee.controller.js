const NhanVien = require("../../models/employee.model"); // msnv
const DocGia = require("../../models/reader.model"); // maDocGia
const Sach = require("../../models/book.model"); // maSach
const TheoDoiMuonSach = require("../../models/borrow.model");

// [GET] /admin/employee/infor
module.exports.getInfor = async (req, res) => {
    try {
        const token = req.cookies.token;
        const employee = await NhanVien.findOne({ token });
        res.status(200).json({
            message: "Send employee successfully",
            employee,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// [GET] /admin/reader/all
module.exports.retrieveAllReaders = async (req, res) => {
    try {
        const readers = await DocGia.find({ deleted: false });
        res.status(200).json(readers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// [POST] /admin/borrow
module.exports.borrowBook = async (req, res) => {
    try {
        const { maDocGia, maSach } = req.body;

        // Kiểm tra độc giả
        const docGia = await DocGia.findOne({ maDocGia });
        if (!docGia) {
            return res.status(404).json({ message: "Độc giả không tồn tại." });
        }

        // Kiểm tra sách
        const sach = await Sach.findOne({ maSach });
        if (!sach || sach.soQuyenConLai <= 0) {
            return res
                .status(400)
                .json({ message: "Sách không tồn tại hoặc đã hết." });
        }

        // Tạo bản ghi mượn sách
        const muon = new TheoDoiMuonSach({
            maDocGia: docGia._id,
            maSach: sach._id,
            ngayMuon: new Date(),
            trangThai: "dangMuon",
        });

        await muon.save();

        // Cập nhật số lượng sách còn lại
        sach.soQuyenConLai -= 1;
        if (sach.soQuyenConLai === 0) sach.trangThai = "hetSach";
        await sach.save();

        return res.status(200).json({ message: "Mượn sách thành công.", muon });
    } catch (err) {
        console.error("Borrow Error:", err);
        return res.status(500).json({ message: "Lỗi máy chủ." });
    }
};

// [PUT] /admin/return/:borrowId
module.exports.returnBook = async (req, res) => {
    try {
        const { borrowId } = req.params;

        const borrowRecord = await TheoDoiMuonSach.findById(borrowId);
        if (!borrowRecord) {
            return res
                .status(404)
                .json({ message: "Không tìm thấy bản ghi mượn sách." });
        }

        if (borrowRecord.trangThai !== "dangMuon") {
            return res
                .status(400)
                .json({ message: "Sách chưa được mượn hoặc đã trả." });
        }

        borrowRecord.ngayTra = new Date();
        borrowRecord.trangThai = "daTra";
        await borrowRecord.save();

        // Cập nhật lại sách
        const sach = await Sach.findById(borrowRecord.maSach);
        if (sach) {
            sach.soQuyenConLai += 1;
            if (sach.trangThai === "hetSach") sach.trangThai = "conSach";
            await sach.save();
        }

        return res.status(200).json({ message: "Trả sách thành công." });
    } catch (err) {
        console.error("Return Error:", err);
        return res.status(500).json({ message: "Lỗi máy chủ." });
    }
};
