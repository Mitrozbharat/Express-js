const express = require('express');
const router = express.Router();


// first route for the get user request
router.get('/', (req, res) => {
    res.send("First get request from user router");

})

router.get('/file', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// second route for the post user request
router.post('/', (req, res) => {
    res.send("First post request from user router");
});

// route to handle user id parameter in the URL
router.param("id", (req, res, next, id) => {
    console.log(`User id is ${id}`);
    next();
});

router
    .route(':id')
    .get((req, res) => {
        res.send(`Get request for user with id ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update user with id ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete user with id ${req.params.id}`);
    });





module.exports = router;