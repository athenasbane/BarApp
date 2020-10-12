const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Tables = require('../../models/table.model');
const auth = require('../../middleware/auth');

router.get('/tables', async (req, res) => {
  try {
    const tables = await Tables.find({});
    res.status(200).send(tables);
  } catch (e) {
    res.status(404).send();
  }
});

router.post('/tables/set', auth, async (req, res) => {
  try {
    mongoose.connection.db.dropCollection('tables', (err, result) => {
      err ? console.log(err) : console.log(result);
    });
    const tableList = req.body.map((table) => new Tables({ ...table }));
    Tables.collection.insertMany(tableList, async (err, docs) => {
      if (err) {
        console.log('[ERROR]');
        console.log(err);
      } else {
        const tables = docs.ops;
        res.status(201).send(tables);
      }
    });
  } catch (e) {
    res.status(404).send();
  }
});

router.post('/tables', auth, async (req, res) => {
  try {
    const table = new Tables({ ...req.body });
    await table.save();
    res.status(201).send(table);
  } catch (e) {
    res.status(404).send();
  }
});

router.patch('/tables/:id', auth, async (req, res) => {
  const table = { ...req.body };
  try {
    await Tables.findOneAndUpdate({ _id: req.params.id }, table);
    res.status(200).send(table);
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
