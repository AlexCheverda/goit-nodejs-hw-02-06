const register = require("./register");
const login = require("./login");
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updAvatar = require('./updAvatar');
const updSubscription = require('./updSubscription');
const verify = require('./verify');
const resendVerify = require('./resendVerify');

module.exports = {
    register,
    login,
    logout,
    getCurrent,
    updAvatar,
    updSubscription,
    verify,
    resendVerify
};