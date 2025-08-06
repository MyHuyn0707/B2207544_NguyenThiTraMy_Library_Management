const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/book.controller");

const multer = require("multer"); //dùng để upload ảnh,...

const storageMulterHelper = require("../../helpers/storageMulter");
const storage = storageMulterHelper();

const upload = multer({ storage: storage });

// /admin/books
router.post("/", upload.single("thumbnail"), controller.createBook); // /admin/books/
router.get("/", controller.getAll);
router.get("/:maSach", controller.getOne);
router.put("/:maSach", upload.single("thumbnail"), controller.updateOne);
router.delete("/:id", controller.deleteOne);
router.delete("/", controller.deleteAll);

module.exports = router;
