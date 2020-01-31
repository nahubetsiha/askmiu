const express = require("express");
const app = express();
const dotenv = require('dotenv')
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const postRoute = require('./routes/posts');
var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true },//   { useNewUrlParser: true },
  () => console.log("Connected to Db")
);

app.use(cors())

app.use(express.json());
app.use("/api/v1/user", authRouter);
app.use("/api/v1/posts",postRoute);
app.listen(8080);
