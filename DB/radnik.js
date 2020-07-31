const moongose = require("mongoose");

const radnik = new moongose.Schema({
    ime: String,
    prezime: String,
   
}
  
)

module.exports = moongose.model("Majstors", radnik);