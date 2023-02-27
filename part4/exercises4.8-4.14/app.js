const config = require("./utils/config");
const http = require("http");
const express = require("express");
require('express-async-errors')
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./controllers/blog");

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());
app.use(blogRouter);

module.exports = app;
