const { users } = require('../models');

module.exports = {
    async getAllUsers(req, res)
    {
        try
        {
            const allUsers = await users.findAll();
            res.send(allUsers);
        }
        catch (err)
        {
            res.status(400).send({
                error: 'Something did not work in users ' + err.message
            });
        }
    },

    async register(req, res)
    {
        try
        {
            const newUser = await users.create(req.body);
            res.send("Thank you for registering " + newUser.first_name);
        }
        catch (err)
        {
            res.status(500).send({
                error: "Something went wrong when registering. " + err
            })
        }
    }
}