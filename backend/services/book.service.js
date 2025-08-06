const Book = require("./../models/book.model");

async function createBook({
    maSach,
    tenSach,
    tacGia,
    namXuatBan,
    maNXB,
    soLuong,
    anhBia,
    slug,
    daXoa,
    ngayXoa,
}) {
    return await Book.create({
        maSach,
        tenSach,
        tacGia,
        namXuatBan,
        maNXB,
        soLuong,
        anhBia,
        slug,
        daXoa,
        ngayXoa,
    });
}

async function getAllBooks() {
    return await Book.find({});
}

async function getBookById(Id) {
    return await Book.findById(Id);
}

async function getBookByMaSach(maSach) {
    return await Book.findOne({ maSach });
}

async function updateBook(
    maSach,
    {
        tenSach,
        tacGia,
        namXuatBan,
        maNXB,
        soLuong,
        anhBia,
        slug,
        daXoa,
        ngayXoa,
    }
) {
    return await Book.updateOne(
        { maSach },
        {
            $set: {
                tenSach,
                tacGia,
                namXuatBan,
                maNXB,
                soLuong,
                anhBia,
                slug,
                daXoa,
                ngayXoa,
            },
        }
    );
}
module.exports = {
    createBook,
    getAllBooks,
    getBookByMaSach,
    getBookById,
    updateBook,
};
