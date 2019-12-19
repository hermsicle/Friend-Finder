const express = require('express');
const app = express();
const PORT = 2888;

//Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"))

//importing our apiRoute & htmlRoute through reqire:
const apiRoute = require('./app/routing/apiRoute');
app.use('/api', apiRoute);

const htmlRoute = require('./app/routing/htmlRoute');
app.use('/', htmlRoute);




//Connecting app to the PORT with listen method:
app.listen(PORT, () => {
    console.log(`You are connected to port: http://localhost:${PORT}`)
})


