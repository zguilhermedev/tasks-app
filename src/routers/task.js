const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const auth = require('../middleware/auth');

router.post('/tasks', auth, async (req, res) => {
 
    const task = new Task({
        ...req.body,
        user: req.user._id
    });

    try {
        await task.save();
        res.status(201).send(task);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/tasks', auth, async (req, res) => {

    try {
        const tasks = await Task.find({user: req.user._id});
        res.status(200).send(tasks);
    } catch(e) {
        res.status(500).send(e);
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne({_id, user: req.user._id });

        if(!task) {
            return res.status(404).send('Task Not Found');
        }
        res.status(200).send(task);
    } catch(e) {
        res.status(500).send(e);
    }
    
});

router.patch('/tasks/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid properties'});
    }

    try {
        const task = await Task.findOne({_id, user: req.user._id });

        updates.forEach((update) => task[update] = req.body[update])

        await task.save();

        if(!task) return res.status(404).send('Task Not Found');

        res.status(200).send(task);

    } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByOneAndDelete({_id, user: req.user._id });

        if(!task) return res.status(404).send('Task Not Found');

        res.send(task);

    } catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;