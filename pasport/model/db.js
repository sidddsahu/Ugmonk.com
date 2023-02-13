const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/passdb")
.then(() => console.log("connection establishe!"))
.catch((err) => console.log(err));


