import mysql from 'mysql';
let dotenv = require('dotenv');
let util = require('util');

// Env vars
dotenv.config();
const host = "localhost";
const user = "root";
const password = "password";
const database = "discord";

// Setup Mysql
export var connection = mysql.createPool({ host, user, password, database });
connection.query = util.promisify(connection.query);
