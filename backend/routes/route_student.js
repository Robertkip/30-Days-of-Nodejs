const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const studentSchema = require("../models/Students");

// Create a student
router.route('/create-student').post(async (req, res) => {
    try {
        const data = await studentSchema.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the student.' });
    }
});

//Read students
// Get all students
router.route('/').get(async (req, res) => {
    try {
        const data = await studentSchema.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching students.' });
    }
});


//get single student
// Get a student by ID
router.route('/edit-student/:id').get(async (req, res) => {
    try {
        const data = await studentSchema.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the student.' });
    }
});

//update student

// Update a student by ID
router.route('/update-student/:id').put(async (req, res) => {
    try {
        const data = await studentSchema.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // To return the updated document
        );

        if (!data) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(data);
        console.log('Student updated successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the student.' });
    }
});

//delete A Student

// Delete a student by ID
router.route('/delete-student/:id').delete(async (req, res) => {
    try {
        const data = await studentSchema.findByIdAndRemove(req.params.id);
        if (!data) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            msg: 'Student deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the student.' });
    }
});

module.exports = router;