const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {

    const timeStamp = new Date().toISOString();
    const tokenInfo = req.headers.authorization || "Token Not Found";
    console.log(`[${timeStamp}] ${req.method}: ${req.url}, AccessToken: "${tokenInfo}"`);
    next();

};

// This is How i can Apply the middleware to all routes
app.use(logger);

//Root Route For checking logging middle-ware
app.get('/', (req, res) => {
    res.send('You are on root of express server!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
