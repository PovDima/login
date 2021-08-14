const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const express = require("express");
const reactViews = require('express-react-views');
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "loginuser"
});

connection.connect();

app.use(bodyParser.text());

app.post("/register", urlEncodedParser, function (request, response) {
	const { url, body } = request
	if (url != "/favicon.ico") {
		if (body.regOrLogin == "Register") {
			bcrypt.genSalt(10, function (err, salt) {
				bcrypt.hash(body.pwd, salt, function (err, hash) {
					const postVars = { username: body.username, password: hash, role: body.role };
					connection.query("SELECT * FROM user WHERE username='" + body.username + "'", function (err, res, fields) {
						if (err) {
							console.log(err)
							response.render("Error.jsx", { error: 'Error while querying', name: 'Register' });
						} else {
							if (res.length) {
								response.render("Error.jsx", { error: 'User already exist!!', name: 'Register' });
							}
							else {
								connection.query("INSERT INTO user set ?", postVars, function (err, result) {
									if (err) {
										console.log("error", err);
										response.render("Error.jsx", { error: 'User registration problem', name: 'Register' });
									} else {
										response.render("Login.jsx");
									}
								});
							}
						}
					});
				});
			});
		}
	}
});

app.post("/login", urlEncodedParser, function (request, response) {
	const { url, body } = request
	if (url != "/favicon.ico") {
		if (body.regOrLogin == "Login") {
			connection.query("SELECT * FROM user WHERE username='" + body.username + "'", function (err, res, fields) {
				if (err) {
					response.render("Error.jsx", { error: 'Username and Password is not correct' });
				} else {
					if (res.length) {
						bcrypt.compare(body.pwd, res[0].password, function (err, result) {
							if (result) {

								response.render("Welcome.jsx", { name: res[0].username, role: res[0].role });
							} else {
								response.render("Error.jsx", { error: 'Password is not correct' });
							}
						});
					} else {
						response.render("Error.jsx", { error: 'Username is not correct' });
					}
				}
			});
		}
	}
})

app.get('/', function (req, res) {
	res.render('Login.jsx');
});

app.get('/register', function (req, res) {
	res.render('Register.jsx');
});

app.listen(3000);
