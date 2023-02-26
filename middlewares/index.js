const auth = require("./auth");
const bodyValidat = require("./bodyValidat");
const { validatIdParam, schemas } = require("./validatId");

module.exports = {
    auth,
    bodyValidat,
    validatIdParam,
    schemas
};