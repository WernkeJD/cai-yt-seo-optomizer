const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'frontend/src')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'))
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})