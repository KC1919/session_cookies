const User = require("../models/User");

class UserService {

    UserService() {

    }

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            console.log("User created successfully!");
        } catch (error) {
            console.log("Failed to create user");
            console.error(error);
        }
    }

    async deleteUser(req, res) {
        try {
            const user = User.findOne({
                name: req.user.name
            });
            if (user) {
                const newUser = await User.deleteOne({
                    name: req.body.name
                });
                console.log("User deleted successfully!");
            } else {
                console.log("User Not found");
                return;
            }
        } catch (error) {
            console.log("Failed to delete user");
            console.error(error);
            process.exit(1);
        }
    }
}

module.exports = UserService;