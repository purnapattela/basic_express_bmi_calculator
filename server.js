const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", (req, res) => {
	let kg = Number(req.body.kg);
	let m = Number(req.body.m);
	let bmi = kg / (m * m);
	res.send("Your BMI is " + bmi);
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
