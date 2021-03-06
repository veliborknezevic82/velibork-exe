const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./DB/connection");
const Majstors = require("./DB/Shemas/radnik");
const cors = require("cors");



connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.get('/', function (req, res) {
   res.send('hello world')
 })
app.get("/radnici", async (req, res) =>{
   try {
      const radnici = await Majstors.find()
      res.json(radnici)
   } catch (error) {
      console.log(error)
   }})

app.get("/:radniciId", async (req, res) =>{
   try {
      const jedanRadnik = await Majstors.findById(req.params.radniciId)
      res.json(jedanRadnik)
   } catch (error) {
      res.status(500).json({message: error.message})
   }})

   
app.post("/radnici", (req, res) =>{
   const radnik = new Majstors({
      ime: req.body.ime,
      prezime: req.body.prezime,
      email: req.body.email,
      lozinka: req.body.lozinka
   })
   radnik.save((err, saveRadnik)=>{
        if(err){console.log("sranje")}
        else{res.json(saveRadnik)}
     }) 
   
});

app.delete("/:radniciId", async (req, res) =>{
   try {
      const jedanRadnik = await Majstors.findByIdAndDelete(req.params.radniciId)
      res.json(jedanRadnik)
   } catch (error) {
      res.status(500).json(error.message)
   }})

  
      


const Port = process.env.Port || 3300;
app.listen(Port, () => console.log("Heloo on port:" + Port))
