const usersController = require('./controllers/usersController');

module.exports = (app) => {
    app.get('/', (req, res) => {res.send("Routes connection successful.")});

    app.get('/getUsers', usersController.getAllUsers);
    app.post('/registerUser', usersController.register);
}