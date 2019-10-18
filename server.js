const 
  express = require("express"),
  path =require("path");


const app = express();
const PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.route("/")
.get(function(req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"))
})

app.route("/resvervation")
.get(function(req, res) {
  res.sendFile(path.join(__dirname, "views/reservation.html"))
})
app.route("/waitinglist")
.get (function(req, res) {
  res.sendFile(path.join(__dirname, "views/waitingList.html"))
})



app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});