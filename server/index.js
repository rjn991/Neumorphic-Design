const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./model/dataSchema.js");

// app.use(express.json());
app.use(cors());
// Increase the payload size limit
app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

// DB config
const db = "mongodb+srv://rjn991:sapnupuas@data.8hhte1d.mongodb.net/data";

// connect to mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

// bodyparser gets the req.body
// app.use(express.urlencoded({ extended: false }));

app.post("/insert", async (req, res) => {
  let user = new User(req.body);
  try {
    result = await user.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getUsers", (req, res) => {
  User.find({},"name")
  .then((users)=>{res.json(users)})
  .catch((err) => {res.json(err)})
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
