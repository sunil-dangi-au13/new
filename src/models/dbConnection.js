const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://sunil-dangi-42:myself@42@cluster0.qe8az.mongodb.net/dhwani_fe?retryWrites=true&w=majority";

const DbConnection = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DbConnection;
