const moongose = require("mongoose");

const URI = "mongodb+srv://prvi:prvi@klaster1-ifgse.mongodb.net/mikonos?retryWrites=true&w=majority";

const connectDB = async() => {
    await moongose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("db connected...!");
}

module.exports = connectDB;