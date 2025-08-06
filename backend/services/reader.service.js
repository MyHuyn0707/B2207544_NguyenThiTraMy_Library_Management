const Reader = require("./../models/reader.model");

async function getReaderByEmail(email) {
    return await Reader.findOne({ email: email });
}

module.exports = {
    getReaderByEmail,
};
