const express = require('express');
const app = express();
const todos = [];

// http://localhost:8080/
// http://localhost:8080/todo?item=[VALUE]

app.get('/', (req, res) => {
	let output = '';
	for (let i = 0; i < todos.length; i++) {
		output += todos[i] + '<br/>';
	};
	res.send(output);
});

app.get('/todo', (req, res) => {
	todos.push(req.query.item);
	res.send('Added');
});

app.listen(8080);
