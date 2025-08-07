const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Định nghĩa schema Employee
const employeeSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        password: String,
        token: String,
        address: String,
        phone: String,
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    },
    { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema, "employees");

// Kết nối MongoDB
mongoose.connect("mongodb://localhost:27017/your_database_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Dữ liệu mẫu
const employees = [
    {
        fullName: "Trần Văn An",
        email: "an.tran@example.com",
        password: "an123456",
        token: null,
        address: "123 Lý Tự Trọng, Cần Thơ",
        phone: "0901234567",
    },
    {
        fullName: "Lê Thị Bích",
        email: "bich.le@example.com",
        password: "bich123456",
        token: null,
        address: "456 Nguyễn Văn Cừ, Cần Thơ",
        phone: "0902345678",
    },
    {
        fullName: "Nguyễn Văn Cường",
        email: "cuong.nguyen@example.com",
        password: "cuong123456",
        token: null,
        address: "789 Trần Phú, Cần Thơ",
        phone: "0903456789",
    },
];

// Hàm nhập dữ liệu
async function seedEmployees() {
    try {
        for (const emp of employees) {
            const hashedPassword = await bcrypt.hash(emp.password, 10);
            const newEmployee = new Employee({
                ...emp,
                password: hashedPassword,
            });
            await newEmployee.save();
            console.log(`✅ Đã thêm: ${emp.fullName}`);
        }
    } catch (err) {
        console.error("❌ Lỗi khi thêm dữ liệu:", err);
    } finally {
        mongoose.connection.close();
    }
}

seedEmployees();
