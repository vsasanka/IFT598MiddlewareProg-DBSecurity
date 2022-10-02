const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();

const corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log('Hello world from Middleware 👋');
    next();
});

const salesRouter = require('./routes/salesRouter');
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;