const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');

const auth = require('../../middleware/auth');

router.post('/user/register', async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/user/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.formData.email, req.body.formData.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(404).send(e);
    }
});

router.post('/user/auth', async (req, res) => {
    try {
        const user = await User.findByToken(req.body.token)
        res.status(200).send({ user });
    } catch (e) {
        res.status(404).send(e);
    }
});

router.post('/user/logout', auth, async (req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token;
        });

        await req.user.save();

        res.send();

    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;