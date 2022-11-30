$(document).ready(onReady);

function onReady() {
	getQuotes();

	$("#submit").on("click", postQuotes);
}

let newQuotes = {
	text: "Bug gulps, eh? welp, seeya later",
	author: "Lloyd Christmas",
};

// create a POST request and log out the response
function postQuotes() {
	console.log("in PostQuotes");
	$.ajax({
		method: "POST",
		url: "/quotes",
		data: newQuotes,
	})
		.then(function (response) {
			console.log("response from the server", response);
			// get the updated array
			getQuotes();
		})
		.catch(function (error) {
			alert(error.responseText);
		});
}

function getQuotes() {
	// this is where we GET quotes from our server
	console.log("in getQuotes");

	// ajax is making the request
	$.ajax({
		method: "GET",
		url: "/quotes",
	}).then(function (response) {
		console.log("response from the server", response);
		appendToDom(response);
	});
}

function appendToDom(array) {
	console.log("appendToDom Function", array);
	$("#output").empty();

	for (let item of array) {
		$("#output").append(`
        <li>"${item.text}" said by ${item.author}</li>
        `);
	}
}
