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



// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// app.post("/addExcercise", ({ body }, res) => {
//   const excercise = body;

//   excercise.read = false;

//   db.excercises.save(excercise, (error, saved) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.send(saved);
//     }
//   });
// });

// app.get("/read", (_req, res) => {
//   db.excercises.find({ read: true }, (error, found) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.get("/unread", (_req, res) => {
//   db.excercises.find({ read: false }, (error, found) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.put("/markread/:id", ({ params }, res) => {
//   db.excercises.update(
//     {
//       _id: mongojs.ObjectId(params.id)
//     },
//     {
//       $set: {
//         read: true
//       }
//     },

//     (error, edited) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

// app.put("/markunread/:id", ({ params }, res) => {
//   db.excercises.update(
//     {
//       _id: mongojs.ObjectId(params.id)
//     },
//     {
//       $set: {
//         read: false
//       }
//     },

//     (error, edited) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

// app.listen(3000, () => {
//   console.log("App running on port 3000!");
// });
