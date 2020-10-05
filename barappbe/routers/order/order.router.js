const express = require('express');
const router = express.Router();
const Order = require('../../models/order.model');
const InputOption = require('../../models/inputOptions.model');

router.get('/order', async (req, res) => {
    try {

    } catch (e) {

    }
});

router.post('/order', async (req, res) => {

    const priceCalc = async (items) => {
        let total = 0;
        for (const item of items) {
            const option = await InputOption.findById(item.optionId);
            total = total + (option.price * item.volume)
        }
        return total;
    };
   try {
    const order = new Order({
        orderedItems: [...req.body.order.orderData],
        tableNumber: req.body.order.tableNumber,
        totalPrice: await priceCalc(req.body.order.orderData)
    });
    await order.save();
    res.status(201).send(order);
   } catch (e) {
    console.log(e);
    res.status(500).send();
   }
});

module.exports = router;