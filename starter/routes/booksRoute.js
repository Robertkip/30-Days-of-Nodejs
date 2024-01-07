const express = require('express');
const { Book } = require('../models/user.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.published_date
        ) {
            return res.status(400).send({
                message: 'Please fill all required fields',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            published_date: req.body.published_date,
        };

        const book = await Book.create(newBook);

        return res.status(201).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.published_date
        ) {
            return res.status(400).send({
                message: 'Please fill all required fields',
            });
        }
        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);
        
        if (!result) {
            return res.status(400).send({
                message: `Cannot update book with id=${id}. Maybe book was not found!`,
            });
        }
        return res.status(200).send({ message: 'Book was updated successfully.' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(400).send({
                message: `Cannot delete book with id=${id}. Maybe book was not found!`,
            });
        }
        return res.status(200).send({ message: 'Book was deleted successfully.' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;