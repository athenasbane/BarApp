const express = require('express');
const router = express.Router();
const Product = require('../../models/product.model')
const InputOption = require('../../models/inputOptions.model')
const auth = require('../../middleware/auth');

router.get('/menu', async (req, res) => {
    try {
        const menu = await Product.find({});
        res.status(200).send(menu);
    } catch (e) {
        res.status(404).send();
    }
});

router.get('/menu/:id', async (req, res) => {
    try {
        const item = await Product.findById(req.params.id);
        res.status(200).send(item);
    } catch (e) {
        console.log(e);
    }
});

router.get('/menu/:id/option', async (req, res) => {
    try {
        const options = await InputOption.find({ product: req.params.id });
        res.status(200).send(options);
    } catch (e) {
        res.status(404).send();
    }
});

router.post('/menu', auth, async (req, res) => {
    try {
        const item = new Product({ ...req.body});
        await item.save();
        res.status(201).send(item);
    } catch (e) {
        res.status(500).send();
    }
});

router.post('/menu/option/:id', auth, async (req, res) => {
    const option = new InputOption({
        ...req.body.option,
        product: req.params.id
    });
    try {
      await option.save();
      res.status(201).send(option);
    } catch (e) {
      res.status(400).send();
    }
});

router.patch('/menu/:id', auth, async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.params.id }, {...req.body});
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

router.patch('/menu/option/:id', auth, async (req, res) => {
    const option = {...req.body.option};
    try {
        await InputOption.findOneAndUpdate({_id: req.params.id}, option);
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

router.delete('/menu/:id', auth, async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        await InputOption.deleteMany({ product: req.params.id });
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

router.delete('/menu/option/:id', auth, async (req, res) => {
    try {
        await InputOption.deleteOne({ _id: req.params.id });
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

module.exports = router;