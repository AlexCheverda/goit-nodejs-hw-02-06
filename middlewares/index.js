const bodyValidat = require("./bodyValidat");
const validatIdParam = require("./isValidObjId");
const auth = require("./auth");
const upload = require("./upload");

module.exports = {
    bodyValidat,
    validatIdParam,
    auth,
    upload
};