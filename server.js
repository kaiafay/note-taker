// importing dependencies 
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initialize express and create port
const app = express();
const PORT = process.env.PORT || 3001;

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// default response for invalid requests
app.use((req, res) => {
    res.status(404).end();
});

// start server and listen on PORT
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});