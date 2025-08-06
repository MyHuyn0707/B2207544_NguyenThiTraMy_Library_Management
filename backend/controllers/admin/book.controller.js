const Book = require("../../models/book.model");
const NhaXuatBan = require("../../models/publisher.model");
const ApiError = require("../../helpers/api-error");
const asyncHandler = require("express-async-handler");
const fs = require("fs");
const upload = require("../../middlewares/admin/upload");
const path = require("path");
const fsx = require("fs-extra");
const BookService = require("./../../services/book.service");

// [POST] /admin/books
const createBook = async (req, res) => {
    try {
        const book = await BookService.createBook({
            ...req.body,
            anhBia: req.file ? req.file.filename : null,
        });
        res.status(200).json({ message: "Book added successfully", book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// [GET] /admin/books
const getAll = async (req, res) => {
    try {
        const books = await BookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

// [GET] /admin/books/:maSach
const getOne = async (req, res) => {
    try {
        const book = await BookService.getBookByMaSach(req.params.maSach);

        if (!book) {
            res.status(404).json({
                message: `Can not find book with maSach: ${req.params.maSach}`,
            });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

// [PUT] /admin/books/:maSach
const updateOne = async (req, res) => {
    try {
        const maSach = req.params.maSach;
        const existingBook = await BookService.getBookByMaSach(maSach);
        if (!existingBook) {
            return res
                .status(404)
                .json({ message: `Cannot find book with maSach: ${maSach}` });
        }

        // Check if a new image file is uploaded
        /*  if (req.file) {
            // Remove the old image file
            if (existingBook.thumbnail) {
                const imagePath = path.join(
                    __dirname,
                    "..",
                    "..",
                    "public",
                    "uploads",
                    existingBook.thumbnail
                );
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.error(`Error deleting old image file: ${err}`);
                    } else {
                        console.log(
                            `Old image file deleted: ${existingBook.thumbnail}`
                        );
                    }
                });
            }
        } */

        // const book = await Book.findByIdAndUpdate(bookId, data, { new: true });

        const updateResult = await BookService.updateBook(
            existingBook.maSach,
            req.body
        );
        if (updateResult.modifiedCount === 0) {
            res.status(404).json({
                message: `Can not update book with maSach: ${req.params.maSach}`,
            });
        }
        res.status(200).json({ message: "Book was updated" });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

// [DELETE] /admin/book/:id
const deleteOne = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id, req.body);
        if (!book) {
            res.status(404).json({
                message: `Can not find book with ID: ${req.params.id}`,
            });
        }
        const imagePath = path.join(
            __dirname,
            "..",
            "..",
            "public",
            "uploads",
            book.thumbnail
        );

        if (book.thumbnail) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(`Error deleting image file: ${err}`);
                } else {
                    console.log(`Image file deleted: ${book.thumbnail}`);
                }
            });
        }
        res.status(200).json({
            message: `Book with ID: ${req.params.id} was deleted`,
        });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

// [DELETE] /admin/book
const deleteAll = async (req, res) => {
    try {
        const result = await Book.deleteMany({});
        // Đường dẫn đến thư mục "uploads"
        const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");

        // Xóa thư mục "uploads" đệ quy
        await fsx.emptyDir(uploadDir);

        res.status(200).json({
            message: `Deleted ${result.deletedCount} books.`,
        });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

module.exports = {
    createBook,
    getAll,
    getOne,
    updateOne,
    deleteOne,
    deleteAll,
};
