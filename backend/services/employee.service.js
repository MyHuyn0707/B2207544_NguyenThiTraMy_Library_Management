const Employee = require("./../models/employee.model");

async function getEmployeeByEmail(email) {
    return await Employee.findOne({ email: email });
}

module.exports = {
    getEmployeeByEmail,
};
