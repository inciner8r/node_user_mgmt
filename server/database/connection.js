const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb://admin:password@localhost:27017",
      {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
      }
    );
    console.log(`mongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
