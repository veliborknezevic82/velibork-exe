const moongose = require("mongoose");

const kategorija = new moongose.Schema({
    
    ime: String,
    brojUKategoriji: Number
   
   
}
  
)

module.exports = moongose.model("Kategoris", kategorija);