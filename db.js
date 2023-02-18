const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", true);
const mongoDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    async (err, data) => {
      if (err) console.log(err);
      else {
        console.log("mongdb is connected");
        const fetched_data = await mongoose.connection.db.collection(
          "foodData"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCatogery = await mongoose.connection.db.collection(
            "foodCatogery"
          );
          foodCatogery.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.foodData = data;
              global.foodCatogery = catData;

              // console.log(global.foodData);
            }
          });
        });
      }
    }
  );
};
module.exports = mongoDB;
