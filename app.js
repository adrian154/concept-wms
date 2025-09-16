const Database = require("better-sqlite3");
const express = require("express");

const db = new Database("data/warehouse.db");

const app = express();
app.listen(3000, "127.0.0.1", () => console.log("server now listening!"));