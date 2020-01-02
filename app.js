const express = require('express');
let app = express();

// Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

require("./model/index");
require("./model/cityMaster");

const router = require("./route/api");

app.use("/api", router);

const port = process.env.PORT_NO || 3200;

app.get("/", (req, res) => {
    res.send("Service is running...");
});

app.listen(port, () => {
    console.log('City app running on port '+ port +'...');
});