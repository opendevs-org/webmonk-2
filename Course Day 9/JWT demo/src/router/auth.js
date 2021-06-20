const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

const accessTokenSecret = 'cuhsdhvwiuhweufh827alokry4opendevs8e7uie8efhdiueh'; //NOTE: a secret for the algorithm

const user = {
    username: 'opendevs',
    password: 'password'
} //NOTE: a default username & password

// http://localhost:3000/api/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        const accessToken = jwt.sign({ username }, accessTokenSecret, { expiresIn: '30m' }); //NOTE: generating a access token from the data & secret
        res.status(200).send({ accessToken });
    } else {
        res.status(401).send('Email/Password wrong.');
    }
});

module.exports = router;
