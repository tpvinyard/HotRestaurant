const 
  express = require("express"),
  path =require("path");


const app = express();
const PORT = 3500;

app.use(express.urlencoded({extend: true}));
app.use(express.json());

const tables = [

]

const reservation = [

]

const waitingLists


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"))
})

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "waitingList.html"))
})

