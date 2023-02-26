const auth = require("./auth");
const bodyValidat = require("./bodyValidat");
const { validatIdParam, schemas } = require("./validatId");
const upload = require("./upload");

module.exports = {
    auth,
    bodyValidat,
    validatIdParam,
    schemas,
    upload
};