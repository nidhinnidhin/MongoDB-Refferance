const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = 6600;

const mongo_url = process.env.MONGO_URI;

try {
  mongoose.connect(mongo_url);
  console.log("MongoDB connected successfully..");
  app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
  });
} catch (error) {
  console.log("Error", error);
}

const userSchema = mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User',userSchema);

const newUser = new User({name:"Nidhin",age:21});

newUser.save()
    .then(() => console.log("New user added.."))
    .catch((err) => console.log("Error occured while adding user..",err))

app.get("/", (req, res) => {
  res.send("Hello world..!");
});
