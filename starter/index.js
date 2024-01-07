require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4005
const Mongodb = process.env.MONGO_URL;
const { Book } = require('./models/user.js');
const booksRoute = require('./routes/booksRoute.js');
const cors = require('cors');
app.use(express.json());

app.get('/', (req, res) => {
    console.log('req');
    return res.status(201).send('Welcome to Mernstack App');
});

app.use('/books', booksRoute);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongodb connected');
        app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
    })
    .catch((err) => {
        console.log(err);
    })
