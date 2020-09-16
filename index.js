const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

var corsOption = {
	origin: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	exposedHeaders: [ 'x-auth-token' ]
};

// parse application/json
app.use(bodyParser.json());

app.use(cors(corsOption));

//get odata
app.get('/api/northwind', (req, res) => {
	debugger;
	fetch('https://services.odata.org/V3/Northwind/Northwind.svc/?$format=json')
		.then((response) => {
			debugger;
			return response.json();
		})
		.then((data) => {
			debugger;
			console.log(data);
			res.send(JSON.stringify({ status: 200, error: null, response: data }));
		})
		.catch((e) => {
			console.log('ERROR');
		});
});

//Server listening
app.listen(3000, () => {
	console.log('Server started on port 3000...');
});
