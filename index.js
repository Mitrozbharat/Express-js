require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4000;
const userRouter = require('./src/routes/users');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

app.use('/', userRouter);
app.use('/users', userRouter);
app.use('/users/:id', userRouter);
app.use('/file', userRouter);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000');
});