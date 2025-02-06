const mongoose = require("mongoose");

function connectToDB () {
      mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
}

module.exports = connectToDB