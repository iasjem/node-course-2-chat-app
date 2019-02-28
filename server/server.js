const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname + '/public');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send('Welcome to the chat app');
});

app.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
});