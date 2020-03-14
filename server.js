const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_CONNECTION_URI, { useNewUrlParser: true }, (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Mongo DB has been connected successfully`);
    }
});

const app = express();

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/user.route');
const exerciseRouter = require('./routes/exercise.route');

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
    console.log(`Express server started at port: ${port}`);
});
