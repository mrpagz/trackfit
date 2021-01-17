const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

// const databaseUrl = "warmup";
// const collections = ["excercises"];
// const db = mongojs(databaseUrl, collections);

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", 
  { useNewUrlParser: true, useFindAndModify: false });

app.use(require("./routes/htmlroutes.js"))
app.use(require("./routes/api-routes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });


