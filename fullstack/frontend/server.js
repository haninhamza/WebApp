const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use('/login', (req, res) => {

res.send({

token: 'test123'

});

});

function login(username, password) {

const requestOptions = {

method: 'POST',

headers: { 'Content-Type': 'application/json' },

body: JSON.stringify({ username, password })

};};

function logout() {

// remove user from local storage to log user out

localStorage.removeItem('currentUser');

}

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));