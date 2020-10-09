const express = require('express');
const router = express.Router();
const Order = require('../../models/order.model');
const InputOption = require('../../models/inputOptions.model');
const app = require('../../app');

router.get('/order', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).send(orders);
    } catch (e) {
        res.status(404).send();
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
    const data = await Order.findById({ _id: order._id});
    
    const io = req.app.get('socketio');
    io.emit('NewOrder', data);
    
    res.status(201).send(order);
   } catch (e) {
    console.log(e);
    res.status(500).send();
   }
});

router.patch('/order/:id', async (req, res) => {
    try {
        await Order.findOneAndUpdate({ _id: req.params.id }, { delivered: true });
        res.status(200).send();
    } catch (e) {
        res.status(404).send();
    }
});

module.exports = router;