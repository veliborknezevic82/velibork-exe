const moongose = require("mongoose");

const radnik = new moongose.Schema({
    
    ime: String,
    prezime: String,
    email: String,
    lozinka: String
   
}
  
)

module.exports = moongose.model("Majstors", radnik);