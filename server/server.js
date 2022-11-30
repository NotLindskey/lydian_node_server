// configurations // set up
const express = require("express");

const app = express();
const port = 5001;

app.use(express.static("server/public"));

app.use(express.urlencoded());

const quoteList = require("./modules/quoteList");

app.listen(port, () => {
	console.log("listening on port ", port);
});

// control = c closes the server
// req = request/send
// res = response

// console logs will populate in the server

// creating a route for our app  // route ex: "/quotes"
// .get - verb - method

app.get("/quotes", function (req, res) {
	console.log("request for /quotes was made");

	// code error 200 (OK)
	// res.sendStatus(200);

	// // code error 418(I'm a Teapot)
	// res.sendStatus(418);

	res.send(quoteList);
});

// C - post
// R - get
// U - put
// D - delete

app.post("/quotes", function (req, res) {
	console.log("in the post request", req.body);
	quoteList.push(req.body);
	// res.sendStatus(404);
	res.sendStatus(201);
});
