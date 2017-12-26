
///////////////////////////////////////////
/////////////    REQUESTS    //////////////
///////////////////////////////////////////

// AJAX involves requesting data over the web, which is done using HTTP Requests.
// There are four commonly used types of HTTP requests - GET, POST, PUT, and DELETE.
// GET requests receive information from other sites by sending a query.
// POST requests can change information on another site and will receive information or data in response.

// When AJAX was first formalized, it required the use of an XMLHttpRequest object, 
// a JavaScript object that is used to retrieve data.


///////////////////////////////////////////
/////  XHR GET REQUEST Boilerplate    /////
///////////////////////////////////////////

const xhr = new XMLHttpRequest();
const url = 'api-to-call';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// Code to execute with response.
	}
};

xhr.open('GET', url);
xhr.send();


///////////////////////////////////////////
////  XHR POST REQUEST Boilerplate    /////
///////////////////////////////////////////

const xhr = new XMLHttpRequest();
const url = 'api-to-call';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// Code to execute with response.
	}
};

xhr.open('POST', url);
xhr.send(data);


///////////////////////////////////////////
////    $.ajax() GET Boilerplate      /////
///////////////////////////////////////////

// AJAX GET calls using jQuery $.ajax
$.ajax({
	url: 'api-to-call',
	type: 'GET',
	dataType: 'json',
	success(response) {
		// Code to execute with response on success
	},
	error(jqXHR, status, errorThrown) {
		// Code to execute with response on failure
	}
});


///////////////////////////////////////////
////    $.ajax() POST Boilerplate     /////
///////////////////////////////////////////

// AJAX POST calls using jQuery $.ajax
$.ajax({
	url: 'api-to-call',
	type: 'POST',
	data: JSON.stringify({id: '200'}),
	dataType: 'json',
	success(response) {
		// Code to execute with response on success
	},
	error(jqXHR, status, errorThrown) {
		// Code to execute with response on failure
	}
});


///////////////////////////////////////////
////    $.get() GET Boilerplate       /////
///////////////////////////////////////////

// AJAX GET calls using jQuery $.get
$.get(
	'api-to-call',
	response => {
		// Code to execute with response on success		
	},
	'json'
);


///////////////////////////////////////////
////    $.post() POST Boilerplate     /////
///////////////////////////////////////////

// AJAX POST calls using jQuery $.post
$.post(
	'api-to-call',
	JSON.stringify({id: '200'}),
	response => {
		// Code to execute with response on success		
	},
	'json'
);


///////////////////////////////////////////
////    $.getJSON() GET Boilerplate   /////
///////////////////////////////////////////

// AJAX GET calls using jQuery $.get
$.getJSON(
	'api-to-call',
	response => {
		// Code to execute with response on success		
	}
);


///////////////////////////////////////////
////    ES6 fetch() GET Boilerplate   /////
///////////////////////////////////////////

fetch('url-api-to-call').then( response => {
	if (response.ok) {
		return response.json();
	}
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
	// Code to execute with jsonResponse.
});


///////////////////////////////////////////
////    ES6 fetch() POST Boilerplate  /////
///////////////////////////////////////////

fetch('url-api-to-call', {
	method: 'POST',
	body: JSON.stringify({id: '200'})
}).then( response => {
	if (response.ok) {
		return response.json();
	}
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
	// Code to execute with jsonResponse.
});


///////////////////////////////////////////
///  ES7 async await GET Boilerplate    ///
///////////////////////////////////////////
async function getData() {
	try {
		let response = await fetch('url-api-to-call');
		if (response.ok) {
			let jsonResponse = await response.json();
			// Code to execute with jsonResponse
		}
		throw new Error('Request Failed!');
	} catch(error) {
		console.log(error);
	}
}


///////////////////////////////////////////
///  ES7 async await POST Boilerplate   ///
///////////////////////////////////////////
async function postData() {
	try {
		let response = await fetch('url-api-to-call', {
			method: 'POST',
			body: JSON.stringify({id: '200'})
		});
		if (response.ok) {
			let jsonResponse = await response.json();
			// Code to execute with jsonResponse
		}
		throw new Error('Request Failed!');
	} catch(error) {
		console.log(error);
	}
}