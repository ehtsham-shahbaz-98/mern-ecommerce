const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(
      process.env.DB_URI
      //     ,
      //     {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
      // }
    )
    .then((data) => {
      console.log(`Mongodb connected with the server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("Error => ", err);
    });
};

module.exports = connectDatabase;
