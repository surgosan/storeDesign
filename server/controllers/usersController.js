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
    }
}