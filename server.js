const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


// const databaseUrl = "warmup";
// const collections = ["excercises"];
// const db = mongojs(databaseUrl, collections);

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", 
  { useNewUrlParser: true, useFindAndModify: false });

app.use(require("./routes/htmlroutes.js"))
app.use(require("./routes/apiroutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });


