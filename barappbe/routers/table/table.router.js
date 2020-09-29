const express = require('express');
const router = express.Router();
const Tables = require('../../models/table.model');
const auth = require('../../middleware/auth');

router.get('/tables', async (req, res) => {
    try {
        const tables = await Tables.find({});
        res.status(200).send(tables)
    } catch (e) {
        res.status(404).send()
    }
});

router.post('/tables', auth, async (req, res) => {
    try {
        const table = new Tables({ ...body });
        await item.save();
        res.status(201).send(table);
    } catch (e) {
        res.status(404).send();
    }
});

router.patch('/tables/:id', auth, async (req, res) => {
    const table = { ...req.body.table };
    console.log(table)
    try {
        await Tables.findOneAndUpdate({ _id: req.params.id }, table );
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

router.delete('/tables/:id', auth, async (req, res) => {
    try {
        await Tables.deleteOne({ _id: req.params.id });
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

module.exports = router;