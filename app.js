const express = require("express");
const app = express();

//middleware
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://Av0cado:0@cluster0.wdbq56r.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const characterRouter = require("./routes/CharacterRoutes");

app.use("/api/characters", characterRouter);