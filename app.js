const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>App Page</title>
        </head>
        <body>
            <h1>app page -html</h1>
        </body>
        </html>
    `);
});

app.get('/hello', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Hello Page</title>
        </head>
        <body>
            <h1>hello page-html</h1>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
