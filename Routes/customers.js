const express = require('express');
const mongose = require('mongoose');
const router = express.Router();
const Customer = require('../models/Customer');

router.get('/get', async(req, res) => {
    try {
        const posts = await Customer.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/post', async(req, res) => {
    
    const customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country,
    });
    try {
        const savedPost = await customer.save();
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:postId', async(req, res) => {

    try {
        const post = await Customer.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Customer.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

router.put('/:postId', async(req, res) => {
    try {
        const updatePost = await Customer.updateOne({ _id: req.params.postId }, {
            $set: {
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zipCode: req.body.zipCode,
                country: req.body.country,
            }
        });
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
})




module.exports = router;