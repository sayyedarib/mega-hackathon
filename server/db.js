const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.MONGO_URI, connectionParams);
    console.log("connected to database successfully");
  } catch (err) {
    console.log("error while connecting with database ", err);
  }
};
