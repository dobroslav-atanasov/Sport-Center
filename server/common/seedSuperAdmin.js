const userModel = require('../models/user');
const userController = require('../controllers/userController');

function addSuperAdmin() {
    userModel.find({})
        .then(users => {
            if (users.length === 0) {
                userModel.create({ username: "SuperAdmin", password: "Admin", firstName: "Super Admin", lastName: "Super Admin", email: "super-admin@test.com", age: 32, gender: "Male", role: "SuperAdmin" })
                    .then((createdUser) => console.log(createdUser));
            }
        }).catch(err => {
            console.log(err);
        });
};

module.exports = {
    addSuperAdmin
}