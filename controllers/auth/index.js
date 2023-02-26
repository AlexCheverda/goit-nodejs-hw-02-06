const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updSubscription = require('./updSubscription');
const updAvatar = require('./updAvatar');

module.exports = {
    register,
    login,
    logout,
    getCurrent,
    updSubscription,
    updAvatar
};